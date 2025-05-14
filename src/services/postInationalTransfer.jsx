export default async function postInationalTransfer(formData) {
  const payload = {
    body: {
      Payment: [
        {
          Product: [
            {
              paymentProductGroup: "IP",
            },
          ],
        },
      ],
      payments: formData.currencyid.map((ccy) => {
        return {
          currencyId: ccy,
        };
      }),
      chargeOptions: [
        {
          chargeOption:
            formData.allowChargeOption === "No" ? "" : formData.chargeOptions,
        },
      ],
      gbDescription: "International Payment",
      futureDate: formData.Allowfuturedate,
      allowFx: "YES",
      FXRate: "YES",
      transactionLimit: formData.TransactionLimit,
      allowRequestedCurrency: "NO",
      allowRequiredCreditValue: "NO",
      chkAcctRestrict: "DEBIT",
      reserveFunds: "YES",
      autoRetry: formData.AutoRetry.toUpperCase(),
      checkFundsWithCharges: formData.checkFundsWithCharges.toUpperCase(),
      checkTransparency: "YES",
      payThroughBeneficiary: "YES",
      duplicateCheck: "PH-OUTGOING",
      warehouseReqd: "YES",
      allowIban: "ALLOWED",
      allowBic: "ALLOWED",
      fraudCheckReqd: "YES",
      rateTolerancePercent: formData.RateTolerantPercent,
      reachabilityCheck: formData["Reachability Check"] === "Yes" ? "BIC" : "",
      cutOffTime: formData.CutOffTime,
    },
  };

  console.log("body: ", JSON.stringify(payload));
  try {
    const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/INATION1/create`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return response;
  } catch (error) {
    console.error("API error:", error);
  }
}
