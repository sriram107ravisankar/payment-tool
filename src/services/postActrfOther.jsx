export default async function postAccountTransferOther(formData) {
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
      payments: formData.currencyId.map((ccy) => {
        return {
          currencyId: ccy,
        };
      }), // fallback to USD if undefined
      chargeOptions: [
        {
          chargeOption: formData.chargeOptions || "", // you can update this if needed
        },
      ],
      gbDescription: "Account Transfer (Sample)",
      futureDate: formData.futureDate.toUpperCase() || "NO",
      defaultChargeOption: "",
      allowFx: "YES",
      FXRate: "YES",
      transactionLimit: formData.TransactionLimit,
      allowRequestedCurrency: "NO",
      allowRequiredCreditValue: "NO",
      chkAcctRestrict: "BOTH",
      reserveFunds: "YES",
      autoRetry: formData.AutoRetry.toUpperCase() || "NO",
      checkFundsWithCharges:
        formData.checkFundsAvailabilityWithCharges.toUpperCase() || "NO",
      checkTransparency: "YES",
      payThroughBeneficiary: "NO",
      duplicateCheck: "PH-BOOK",
      warehouseReqd: "YES",
    },
  };
  console.log("body: ", JSON.stringify(payload));
  try {
    const endpoint = `http://172.24.133.69/PaymentAccelerator/api/v1.0.0/party/paymentorderproduct/${
      formData.clearingName ? formData.clearingName : ACOTH1
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
