import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/AccountTransferForm.css";
import { formContext } from "../context/formContext";

export default function AccountOthersForm() {
  const navigate = useNavigate();
  const formState = useContext(formContext);
  // const [formData, setFormData] = useState({
  //   futureDate: "",
  //   autoRetry: "",
  //   currencyId: [],
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mappedFormData = {
      futurePayments: formState.otherformData.futureDate,
      retryProcessing: formState.otherformData.autoRetry,
      currency:
        formState.otherformData.currencyId &&
        formState.otherformData.currencyId.length > 0
          ? formState.otherformData.currencyId
          : ["USD"],
      charges: "NO",
      beneficiary: "NO",
    };
    console.log(mappedFormData);

    navigate("/account-others-summary", {
      state: {
        formData: mappedFormData,
        transferType: "Account Transfer (Different Customer - Same Bank)",
      },
    });
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-section">
          <div className="header">
            {/* <button className="backarrow-button" onClick={() => navigate(-1)}>
                            &lt;
                        </button> */}
            <h3 className="backlabel">
              Account Transfer (Different Customer - Same Bank)
            </h3>
          </div>

          {/* Question 1 */}
          <div className="form-question">
            <p className="question-text">
              1. Do you need to allow payments to process in future?
            </p>
            <div className="custom-radio-group">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="futureDate"
                  value="YES"
                  checked={formState.otherformData.futureDate === "YES"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      futureDate: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                YES
              </label>

              <label className="custom-radio">
                <input
                  type="radio"
                  name="futureDate"
                  value="NO"
                  checked={formState.otherformData.futureDate === "NO"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      futureDate: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                NO
              </label>
            </div>
          </div>

          {/* Question 2 */}
          <div className="form-question">
            <p className="question-text">
              2. What are the currencies you need for this payment?
            </p>
            <div className="custom-checkbox-group">
              {["USD", "GBP", "EUR"].map((currency) => (
                <label key={currency} className="custom-checkbox">
                  <input
                    type="checkbox"
                    name="currency"
                    value={currency}
                    checked={formState.otherformData.currencyId.includes(
                      currency
                    )}
                    onChange={(e) => {
                      const value = e.target.value;
                      const isPresent =
                        formState.otherformData.currencyId.includes(value);
                      formState.updateOthersformState({
                        ...formState.otherformData,
                        currencyId: isPresent
                          ? formState.otherformData.currencyId.filter(
                              (ccy) => ccy !== value
                            )
                          : [...formState.otherformData.currencyId, value],
                      });
                    }}
                  />
                  <span className="checkmark"></span>
                  {currency}
                </label>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="form-question">
            <p className="question-text">
              3. Do you want the system to retry the processing of payment if
              there is any issue?
            </p>
            <div className="custom-radio-group">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="autoRetry"
                  value="YES"
                  checked={formState.otherformData.autoRetry === "YES"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      autoRetry: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                YES
              </label>
              <label className="custom-radio">
                <input
                  type="radio"
                  name="autoRetry"
                  value="NO"
                  checked={formState.otherformData.autoRetry === "NO"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      autoRetry: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                NO
              </label>
            </div>
          </div>

          {/*Question 4*/}
          <div className="form-question">
            <p className="question-text">
              4. What is the Maximum limit for a single payment transaction?
            </p>
            <div className="custom-radio-group">
              <label className="custom-label">
                <input
                  type="text"
                  name="maxLimit"
                  value={formState.otherformData.maxLimit || ""}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      maxLimit: e.target.value,
                    })
                  }
                />
              </label>
            </div>
          </div>

          {/*Question 5*/}

          <div className="form-question">
            <p className="question-text">
              5. Do you need to check the funds along with the charge amount?
            </p>
            <div className="custom-radio-group">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="checkFundCharge"
                  value="YES"
                  checked={formState.otherformData.checkFundCharge === "YES"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      checkFundCharge: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                YES
              </label>

              <label className="custom-radio">
                <input
                  type="radio"
                  name="checkFundCharge"
                  value="NO"
                  checked={formState.otherformData.checkFundCharge === "NO"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      checkFundCharge: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                NO
              </label>
            </div>
          </div>

          {/*Question 6*/}

          <div className="form-question">
            <p className="question-text">
              6. Do you want to apply charges for the Payments?
            </p>
            <div className="custom-radio-group">
              <label className="custom-radio">
                <input
                  type="radio"
                  name="allowCharge"
                  value="BEN"
                  checked={formState.otherformData.allowCharge === "BEN"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      allowCharge: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                BEN
              </label>

              <label className="custom-radio">
                <input
                  type="radio"
                  name="allowCharge"
                  value="OUR"
                  checked={formState.otherformData.allowCharge === "OUR"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      allowCharge: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                OUR
              </label>

              <label className="custom-radio">
                <input
                  type="radio"
                  name="allowCharge"
                  value="SHA"
                  checked={formState.otherformData.allowCharge === "SHA"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      allowCharge: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                SHA
              </label>

              <label className="custom-radio">
                <input
                  type="radio"
                  name="allowCharge"
                  value="NO"
                  checked={formState.otherformData.allowCharge === "NO"}
                  onChange={(e) =>
                    formState.updateOthersformState({
                      ...formState.otherformData,
                      allowCharge: e.target.value,
                    })
                  }
                />
                <span className="radiomark"></span>
                NO
              </label>
            </div>
          </div>

          {/* Note */}
          <p className="note-text">
            * Some fields have been predefined for this product. They will be
            visible in the next screen.
          </p>
          <div className="buttons">
            <button className="back-button" onClick={() => navigate(-1)}>
              back
            </button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
