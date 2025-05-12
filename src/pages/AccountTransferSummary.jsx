import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/AccountTransferSummary.css";

export default function AccountTransferSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData = {}, transferType = "" } = location.state || {};

  const handleSubmit = async () => {
    const dummyPayload = {
      transferType,
      charges: formData.charges,
      beneficiary: formData.beneficiary,
      futurePayments: formData.futurePayments,
      currency: formData.currency,
      retryProcessing: formData.retryProcessing,
    };
    console.log(formData);
    console.log(dummyPayload);

    const payload = {
      body: {
        Payment: [
          {
            Product: [
              {
                paymentProductGroup: "ACTRF",
              },
            ],
          },
        ],
        payments: formData.currency.map((ccy) => {
          return {
            currencyId: ccy,
          };
        }), // fallback to USD if undefined
        chargeOptions: [
          {
            chargeOption: "", // you can update this if needed
          },
        ],
        gbDescription: "Account Transfer (Sample)",
        futureDate: formData.futurePayments || "NO",
        defaultChargeOption: "",
        allowFx: "YES",
        FXRate: "YES",
        allowRequestedCurrency: "NO",
        allowRequiredCreditValue: "NO",
        chkAcctRestrict: "BOTH",
        reserveFunds: "YES",
        autoRetry: formData.retryProcessing || "NO",
        checkFundsWithCharges: "NO",
        checkTransparency: "YES",
        payThroughBeneficiary: "NO",
        duplicateCheck: "PH-BOOK",
        warehouseReqd: "YES",
      },
    };

    console.log("body: ", JSON.stringify(payload));
    try {
      const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/ACHOME/create`;

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

  return (
    <div className="summary-wrapper">
      <div className="summary-container">
        <div className="header">
          {/* <button className="backarrow-button" onClick={() => navigate(-1)}>
            &lt;
          </button> */}
          <h3 className="summary-title">Payment Product Summary</h3>
        </div>

        <div className="summary-content">
          <div className="summary-item">
            <span>1. Do you need charges for the payment ?</span>
            <span className="Values">
              {formData.charges === "YES" ? "Yes" : "No"}
            </span>
          </div>

          <div className="summary-item">
            <span>2. Do you need payment through beneficiary ?</span>
            <span className="Values">
              {formData.beneficiary === "YES" ? "Yes" : "No"}
            </span>
          </div>

          <div className="summary-item">
            <span>3. Do you need to allow payments to process in future ?</span>
            <span className="Values">
              {formData.futurePayments === "YES"
                ? "Yes"
                : formData.futurePayments === "NO"
                ? "No"
                : "Not answered"}
            </span>
          </div>

          <div className="summary-item">
            <span>4. What are the currencies you need for this payment ?</span>
            <div className="valuesgroup">
            {formData.currency.map((ccy) => {
              return <span className="Values">{ccy}</span>;
            })}
            </div>
            
          </div>

          <div className="summary-item">
            <span>
              5. Do you want the system to retry the processing of payment if
              there is any issue?
            </span>
            <span className="Values">
              {formData.retryProcessing === "YES"
                ? "Yes"
                : formData.retryProcessing === "NO"
                ? "No"
                : "Not answered"}
            </span>
          </div>
        </div>
        <div className="buttons">
          <button className="back-button" onClick={() => navigate(-1)}>
            back
          </button>
          <button
            type="button"
            className="submit-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
