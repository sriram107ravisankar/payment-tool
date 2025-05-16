import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/multistepform_style.css";
import getUserQuestion from "../constants/questions";
import postDomesticTransfer from "../services/postDomesticTransfer";
import postProductCreation from "../services/postProduct";

const ProductCreation = (props) => {
  // Get productType = acother,inational,etc.
  const { productType } = props;
  // store questions.
  const [userQuestions, setUserQuestions] = useState([]);
  const [metaQuestions, setMetaQuestions] = useState([]);
  const [formData, setFormData] = useState(() => {
    const initial = {};
    userQuestions.forEach((q) => {
      initial[q.key] = q.type === "checkbox" ? q.default || [] : "";
      if (q.type === "range" && q.key === "TransactionLimit") {
        initial[q.key] = "0"; // Or your desired initial numerical value as a string
      }
    });
    metaQuestions.forEach((m) => {
      initial[m.key] = m.value;
    });
    return initial;
  });
  // Get questions when productType is changed.
  useEffect(() => {
    const {
      userQuestions: fetchedUserQuestions,
      metaQuestions: fetchedMetaQuestions,
    } = getUserQuestion(productType);
    setUserQuestions(fetchedUserQuestions);
    setMetaQuestions(fetchedMetaQuestions);
  }, [productType]);
  useEffect(() => {
    if (
      formData &&
      formData["allowChargeOption"] &&
      formData["allowChargeOption"] === "Yes" &&
      !userQuestions.some((q) => q.key === "chargeOptions") // Prevent duplicates
    ) {
      setUserQuestions((prev) => [
        ...prev,
        {
          key: "chargeOptions",
          text: "Who wants to bear charges for the payment ?",
          type: "radio",
          options: ["BEN", "OUR", "SHA"],
        },
      ]);
    } else if (
      formData &&
      formData["allowChargeOption"] !== "Yes" &&
      userQuestions.some((q) => q.key === "chargeOptions")
    ) {
      // Remove the chargeOptions question if the condition is no longer met
      setUserQuestions((prev) => prev.filter((q) => q.key !== "chargeOptions"));
    }
  }, [formData, userQuestions]); // Depend on formData to react to changes
  console.log(userQuestions, metaQuestions);
  const navigate = useNavigate();
  const totalInputSteps = useMemo(
    () => Math.ceil(userQuestions.length / 4),
    [userQuestions.length]
  );

  const totalSteps = totalInputSteps + 1;
  const [step, setStep] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  function updateProductStatus() {
    switch (productType) {
      case "actrf":
        localStorage.setItem("actrf", "true");
        break;
      case "actrf_other":
        localStorage.setItem("actrf_other", "true");
        break;
      case "inational":
        localStorage.setItem("inational", "true");
        break;
      case "sepa_inst":
        localStorage.setItem("sepa_inst", "true");
        break;
      case "sepa":
        localStorage.setItem("sepa", "true");
        break;
      case "domestic":
        localStorage.setItem("domestic", "true");
        break;
      default:
        console.warn("Unknown Product");
    }
  }
  function getProductHeading() {
    switch (productType) {
      case "actrf":
        return "Account Transfer";
      case "actrf_other":
        return "Account Transfer Other";
      case "inational":
        return "International Transfer";
      case "sepa_inst":
        return "SEPA Instant Transfer";
      case "sepa":
        return "SEPA Transfer";
      case "domestic":
        return "Domestic Transfer";
    }
  }
  // Handle input change.
  const handleChange = (e, key, type) => {
    const value = e.target.value;
    setFormData((prev) => {
      if (type === "checkbox") {
        const set = new Set(prev[key] || []);
        e.target.checked ? set.add(value) : set.delete(value);
        return { ...prev, [key]: Array.from(set) };
      } else {
        return { ...prev, [key]: value };
      }
    });
  };
  console.log(`step : ${step}`);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => {
    if (step === totalSteps && reviewPage > 1) setReviewPage((p) => p - 1);
    else setStep((prev) => Math.max(prev - 1, 1));
  };

  //Form submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // create product based on product type.
    const response = await postProductCreation(productType, formData);
    console.log(response);

    if (response && response.ok) {
      const json = await response.json();
      updateProductStatus();
      console.log("API call success:", json);
      navigate("/payment-status", {
        state: {
          success: true,
          version: json?.header?.audit?.versionNumber || "1",
          paymentId: json?.header?.id || "",
        },
      });
    } else {
      const errorText = await response.text();
      console.error("API call failed:", errorText);
      navigate("/payment-status", {
        state: {
          success: false,
        },
      });
    }
  };

  //Map userQuestions and metaQuestions to review.
  const allReviewQuestions = [
    ...userQuestions.map((q) => ({
      key: q.key,
      text: q.text,
      value: formData[q.key],
      isArray: q.type === "checkbox",
    })),
    ...metaQuestions.map((m) => ({
      key: m.key,
      text: m.text,
      value: m.value,
    })),
  ];

  const chunkSize = 5;
  const totalPages = Math.ceil(allReviewQuestions.length / chunkSize);
  const currentChunk = allReviewQuestions.slice(
    (reviewPage - 1) * chunkSize,
    reviewPage * chunkSize
  );

  // Render review page.
  const renderReview = () => (
    <div>
      <ul className="review-list">
        {currentChunk.map(({ key, text, value }) => (
          <li key={key} className="review-item">
            <span className="review-question">{text}</span>
            <span className="review-answer">{value || "Not answered"}</span>
          </li>
        ))}
      </ul>

      <div className="button-group">
        <button
          type="button"
          className="prvsbtn"
          onClick={() => setReviewPage((p) => Math.max(1, p - 1))}
          disabled={reviewPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          className="nxtbtn"
          onClick={() => setReviewPage((p) => Math.min(totalPages, p + 1))}
          disabled={reviewPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="button-group2">
        <button
          type="button"
          onClick={() => {
            setStep(1);
            setReviewPage(1);
          }}
          className="bk-button"
        >
          {" "}
          {/* 1 to go to the first input page */} Back to first Step
        </button>
        {reviewPage === totalPages && (
          <button className="sbmt-button" type="submit">
            Create Product
          </button>
        )}
      </div>
    </div>
  );

  const renderStepInputs = () => {
    const questionsPerPage = 4;
    const qSlice = userQuestions.slice(
      (step - 1) * questionsPerPage,
      step * questionsPerPage
    );
    return qSlice.map(({ key, text, type, options, placeholder, add_note }) => {
      console.log(options, type);
      return (
        <div key={key} style={{ marginBottom: "20px" }}>
          <label style={{ fontWeight: "bold", display: "block" }}>{text}</label>
          <div className="options">
            {type === "dropdown" && options && options.length > 0 ? (
              <select
                id={key}
                name={key}
                value={formData[key] || ""}
                onChange={(e) => handleChange(e, key, type)}
                style={{ padding: "5px", width: "100%" }}
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : type === "range" ? (
              <label>
                <input
                  type={type}
                  name={key}
                  min="0"
                  max="10000"
                  step="5"
                  value={formData[key] || "0"}
                  onChange={(e) => handleChange(e, key, type)}
                />
                {formData.TransactionLimit}
              </label>
            ) : options && options.length > 0 ? (
              options.map((option) => (
                <div
                  className={
                    type === "radio"
                      ? "radio-group"
                      : type === "checkbox"
                      ? "checkbox-group"
                      : ""
                  }
                  key={option}
                >
                  <label>
                    <input
                      type={type}
                      name={key}
                      value={option}
                      checked={
                        type === "checkbox"
                          ? formData[key]?.includes(option)
                          : formData[key] === option
                      }
                      onChange={(e) => handleChange(e, key, type)}
                    />
                    {option}
                  </label>
                </div>
              ))
            ) : (
              <input
                type={type}
                name={key}
                value={formData[key] || ""}
                onChange={(e) => handleChange(e, key, type)}
                placeholder={placeholder || ""}
                style={{ padding: "5px", width: "100%" }}
              />
            )}
            {formData["AutoRetry"] === "Yes" &&
            add_note &&
            add_note === true ? (
              <label className="note-label">
                Note : System will try to process the payment incase of
                insufficient funds with in EOD
              </label>
            ) : (
              <></>
            )}
          </div>
        </div>
      );
    });
  };
  function navigateDashboard() {
    navigate(-1);
  }
  console.log(reviewPage);

  return (
    <div className="container-fluid">
      <div className="card">
        <div className="leftpane">
          <button onClick={navigateDashboard} className="arrbtn">
            ←
          </button>
          <h1>PAYFEZ</h1>
          <h2>{getProductHeading()}</h2>
          <div className="progress-tracker-vertical">
            <div
              className={
                step > totalInputSteps ? "step completed" : "step current"
              }
            >
              <div className="circle">1</div>
              <span>User Questions</span>
            </div>
            <div className="line"></div>
            <div
              className={
                reviewPage === totalPages ? "step completed" : "step current"
              }
            >
              <div className="circle">2</div>
              <span>Summary</span>
            </div>
          </div>
        </div>
        <div className="rightpane">
          <div className="form-container">
            <div className="header">
              <h2 className="backlabel">{getProductHeading()}</h2>
            </div>
            <h3>
              {step < totalSteps
                ? `(Page ${step} of ${totalInputSteps})`
                : `Review (Page ${reviewPage} of ${totalPages})`}
            </h3>
            <form onSubmit={handleSubmit}>
              {step < totalSteps ? renderStepInputs() : renderReview()}
              {step < totalSteps && (
                <div className="button-group">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="prvsbtn"
                    >
                      Previous
                    </button>
                  )}
                  <button type="button" onClick={nextStep} className="nxtbtn">
                    Next →
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreation;
