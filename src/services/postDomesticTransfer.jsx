export default async function postDomesticTransfer(formData) {
  const payload = {
    body: {
      Payment: [
        {
          Product: [
            {
              paymentProductGroup: "DP",
            },
          ],
        },
      ],
      payments: [
        {
          currencyId: formData.currencyid,
        },
      ],
      chargeOptions: [
        {
          chargeOption:
            formData.allowChargeOption.toUpperCase() === "NO"
              ? ""
              : formData.chargeOptions,
        },
      ],
      gbDescription: "Domestic Payment",
      futureDate: formData.futureDate.toUpperCase() || "NO",
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
      allowIban:
        formData.IBAN.toUpperCase() === "YES" ? "ALLOWED" : "NOT ALLOWED",
      allowBic:
        formData.BIC.toUpperCase() === "YES" ? "ALLOWED" : "NOT ALLOWED",
      allowSortCode:
        formData.allowSortCode.toUpperCase() === "YES"
          ? "ALLOWED"
          : "NOT ALLOWED",
      fraudCheckReqd: formData["Fraud Check Reqd"].toUpperCase() || "YES",
      rateTolerancePercent: formData.RateTolerantPercent,
      reachabilityCheck:
        formData["Reachability Check"].toUpperCase() === "YES" ? "BIC" : "",
      cutOffTime: formData.CutOffTime,
    },
  };
  console.log("body: ", JSON.stringify(payload));
  try {
    const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/${
      formData.clearingName ? formData.clearingName : DOMESTC1
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
