export default async function postSepaInstTransfer(formData) {
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
      gbDescription: "Sepa Instant Payment",
      futureDate: formData.futureDate.toUpperCase(),
      allowFx: "YES",
      FXRate: "YES",
      transactionLimit: formData.TransactionLimit,
      allowSortCode:
        formData.allowSortCode.toUpperCase() === "YES"
          ? "ALLOWED"
          : "NOT ALLOWED",
      ClearingChannel: "EBAINST",
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
      fraudCheckReqd: formData["Fraud Check Reqd"].toUpperCase(),
      rateTolerancePercent: formData.RateTolerantPercent,
      reachabilityCheck: formData["Reachability Check"] === "YES" ? "BIC" : "",
      cutOffTime: formData.CutOffTime,
    },
  };

  console.log("body: ", JSON.stringify(payload));
  try {
    const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/${
      formData.clearingName ? formData.clearingName : SEPAINST2
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
