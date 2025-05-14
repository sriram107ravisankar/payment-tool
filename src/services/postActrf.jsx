export default async function postAccountTransfer(formData) {
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
      payments: formData.currencyid.map((ccy) => {
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
    return response;
  } catch (error) {
    console.error("API error:", error);
  }
}
