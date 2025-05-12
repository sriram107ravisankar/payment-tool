import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/multistepform_style.css";
const userQuestions = [
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
    type: "radio",
    options: ["YES", "NO"],
  },
  {
    key: "allowSortCode",
    text: "Do you need validate the beneficiary bank information ( clearing codes) for this payment?",
    type: "radio",
    options: ["YES", "NO"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment if there is any issue?",
    type: "radio",
    options: ["YES", "NO"],
  },
  {
    key: "TransactionLimit",
    text: "What is the Maximum limit for a single payment transaction ?",
    type: "text",
    options: [],
  },
  {
    key: "checkFundsWithCharges",
    text: "Do you need to check the funds along with the charge amount?",
    type: "radio",
    options: ["YES", "NO"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Does fraud check needed for this payment order product?",
    type: "radio",
    options: ["YES", "NO"],
  },
  {
    key: "RateTolerantPercent",
    text: "What is the percentage for transaction exceeding a pre set  exchange rate limit ?",
    type: "text",
    options: [],
  },
  {
    key: "Reachability Check",
    text: "Do you need to check the receiver Bank's availability?",
    type: "radio",
    options: ["YES", "NO"],
  },
  {
    key: "CutOffTime",
    text: "what is the cut off time for the last payment to be processed in the same day?",
    type: "text",
    options: [],
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply charges for the Payments?",
    type: "radio",
    options: ["BEN", "OUR", "SHA", "NO"],
  },
];

const metaQuestions = [
  {
    key: "Beneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "YES",
  },
  {
    key: "allowFx",
    text: "Do you need cross Currency Payments ?",
    value: "YES",
  },
  {
    key: "FXRate",
    text: "Is exchange rate needed ?",
    value: "YES",
  },
  {
    key: "ccy",
    text: "What are the currencies you need for this payment? ",
    value: "EUR",
  },
  {
    key: "clearing_code",
    text: "Which Clearing will be used for this payment product?",
    value: "EBAINST",
  },
  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "YES",
  },
  {
    key: "Restriction",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit",
  },
  {
    key: "Reserve",
    text: "Do you need to Reserve funds ?",
    value: "YES",
  },
  {
    key: "warehouseReqd",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "YES",
  },
  {
    key: "Duplicate",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "YES",
  },
  {
    key: "IBAN",
    text: "Do you need IBAN for this payment product ?",
    value: "YES",
  },
  {
    key: "BIC",
    text: "Do you need BIC for this payment product ?",
    value: "YES",
  },
];

const SepaInstantTransfer = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [reviewPage, setReviewPage] = useState(1);
  const [formData, setFormData] = useState(() => {
    const initial = {};
    userQuestions.forEach((q) => {
      initial[q.key] = q.type === "checkbox" ? q.default || [] : "";
    });
    metaQuestions.forEach((m) => {
      initial[m.key] = m.value;
    });
    return initial;
  });

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

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => {
    if (step === 5 && reviewPage > 1) setReviewPage((p) => p - 1);
    else setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Form submitted!");
    console.log("Submitted Data:", formData);
    console.log();

    const payload = {
      body: {
        Payment: [
          {
            Product: [
              {
                paymentProductGroup: "SEPA",
              },
            ],
          },
        ],
        payments: [{ currencyId: "EUR" }],
        chargeOptions: [
          {
            chargeOption:
              formData.allowChargeOption === "NO"
                ? ""
                : formData.allowChargeOption,
          },
        ],
        gbDescription: "Sepa Instant Payment",
        futureDate: formData.Allowfuturedate,
        allowFx: "YES",
        FXRate: "YES",
        transactionLimit: formData.TransactionLimit,
        allowSortCode:
          formData.allowSortCode === "YES" ? "ALLOWED" : "NOT ALLOWED",
        ClearingChannel: "EBAINST",
        allowRequestedCurrency: "NO",
        allowRequiredCreditValue: "NO",
        chkAcctRestrict: "DEBIT",
        reserveFunds: "YES",
        autoRetry: formData.AutoRetry,
        checkFundsWithCharges: formData.checkFundsWithCharges,
        checkTransparency: "YES",
        payThroughBeneficiary: "YES",
        duplicateCheck: "PH-OUTGOING",
        warehouseReqd: "YES",
        allowIban: "MANDATORY",
        allowBic: "ALLOWED",
        fraudCheckReqd: "YES",
        rateTolerancePercent: formData.RateTolerantPercent,
        reachabilityCheck:
          formData["Reachability Check"] === "YES" ? "BIC" : "",
        cutOffTime: formData.CutOffTime,
      },
    };

    console.log("body: ", JSON.stringify(payload));
    try {
      const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/SEPAINST2/create`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const json = await response.json();
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
    } catch (error) {
      console.error("API error:", error);
    }
  };

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
      value: formData[m.key],
    })),
  ];

  const chunkSize = 5;
  const totalPages = Math.ceil(allReviewQuestions.length / chunkSize);
  const currentChunk = allReviewQuestions.slice(
    (reviewPage - 1) * chunkSize,
    reviewPage * chunkSize
  );

  const renderReview = () => (
    <div>
      <h3>
        Review (Page {reviewPage} of {totalPages})
      </h3>
      <ul className="review-list">
        {currentChunk.map(({ key, text, value, isArray }) => (
          <li key={key} className="review-item">
            <span className="review-question">{text}</span>
            <span className="review-answer">
              {isArray
                ? value?.length
                  ? value.join(", ")
                  : "Not answered"
                : value || "Not answered"}
            </span>
          </li>
        ))}
      </ul>

      <div className="button-group">
        <button
          type="button"
          className="rviewbtnbk"
          onClick={() => setReviewPage((p) => Math.max(1, p - 1))}
          disabled={reviewPage === 1}
        >
          ←
        </button>
        <button
          type="button"
          className="rviewbtnfd"
          onClick={() => setReviewPage((p) => Math.min(totalPages, p + 1))}
          disabled={reviewPage === totalPages}
        >
          →
        </button>
      </div>

      <div className="button-group2">
        <button type="button" onClick={() => setStep(1)} className="ftsstpbtn">
          {" "}
          {/* 1 to go to the first input page */}← Back to first Step
        </button>
        {reviewPage === totalPages && (
          <button className="submit-btn" type="submit">
            Submit
          </button>
        )}
      </div>
    </div>
  );

  const renderStepInputs = () => {
    const qSlice = userQuestions.slice((step - 1) * 3, step * 3);
    return qSlice.map(({ key, text, type, options }) => {
      console.log(options, type);
      return (
        <div key={key} className="form-group">
          <label>{text}</label>
          <div className="options">
            {options.length !== 0 ? (
              options.map((option) => (
                <label key={option}>
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
              ))
            ) : (
              <input
                type={type}
                name={key}
                value={formData[key] || ""}
                onChange={(e) => handleChange(e, key, type)}
              />
            )}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container-fluiid">
      <div className="form-container">
        <h2>Step {step} of 5</h2>
        <form onSubmit={handleSubmit}>
          {step < 5 ? renderStepInputs() : renderReview()}
          {step < 5 && (
            <div className="button-group">
              {step > 1 && (
                <button type="button" onClick={prevStep} className="prvsbtn">
                  ← Previous Step
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
  );
};

export default SepaInstantTransfer;
