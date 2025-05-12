import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/AccountTransferForm.css";
import { formContext } from "../context/formContext";

export default function AccountTransferForm() {
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
      futurePayments: formState.formData.futureDate,
      retryProcessing: formState.formData.autoRetry,
      currency:
        formState.formData.currencyId &&
        formState.formData.currencyId.length > 0
          ? formState.formData.currencyId
          : ["USD"],
      charges: "NO",
      beneficiary: "NO",
    };
    console.log(mappedFormData);

    navigate("/account-transfer-summary", {
      state: {
        formData: mappedFormData,
        transferType: "Account Transfer (Same Customer - Same Bank)",
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
              Account Transfer (Same Customer - Same Bank)
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
                  checked={formState.formData.futureDate === "YES"}
                  onChange={(e) =>
                    formState.updateFormState({
                      ...formState.formData,
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
                  checked={formState.formData.futureDate === "NO"}
                  onChange={(e) =>
                    formState.updateFormState({
                      ...formState.formData,
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
                    checked={formState.formData.currencyId.includes(currency)}
                    onChange={(e) => {
                      const value = e.target.value;
                      const isPresent =
                        formState.formData.currencyId.includes(value);
                      formState.updateFormState({
                        ...formState.formData,
                        currencyId: isPresent
                          ? formState.formData.currencyId.filter(
                              (ccy) => ccy !== value
                            )
                          : [...formState.formData.currencyId, value],
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
                  checked={formState.formData.autoRetry === "YES"}
                  onChange={(e) =>
                    formState.updateFormState({
                      ...formState.formData,
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
                  checked={formState.formData.autoRetry === "NO"}
                  onChange={(e) =>
                    formState.updateFormState({
                      ...formState.formData,
                      autoRetry: e.target.value,
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
