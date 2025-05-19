export default async function postSepaTransfer(formData) {
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
            formData.allowChargeOption.toUpperCase() === "NO"
              ? ""
              : formData.chargeOptions,
        },
      ],
      gbDescription: "Sepa Payment",
      futureDate: formData.futureDate.toUpperCase(),
      allowFx: "YES",
      FXRate: "YES",
      transactionLimit: formData.TransactionLimit,
      allowSortCode:
        formData.allowSortCode.toUpperCase() === "YES"
          ? "ALLOWED"
          : "NOT ALLOWED",
      ClearingChannel: "STEP2",
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
      allowIban: "MANDATORY",
      allowBic: "ALLOWED",
      fraudCheckReqd: formData["Fraud Check Reqd"].toUpperCase() || "NO",
      rateTolerancePercent: formData.RateTolerantPercent,
      reachabilityCheck:
        formData["Reachability Check"].toUpperCase() === "YES" ? "BIC" : "",
      cutOffTime: formData.CutOffTime,
    },
  };

  console.log("body: ", JSON.stringify(payload));
  try {
    const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/${
      formData.clearingName ? formData.clearingName : SEPA1
    }/create`;

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
