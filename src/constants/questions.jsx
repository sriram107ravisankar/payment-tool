// ACCOUNT TRANSFER HOME QUESTIONS
export const actrfUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have preferred name for this payment product?",
    type: "text",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you want to allow payments for future date ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "currencyid",
    text: "What are the currencies you need for this payment?",
    type: "checkbox",
    options: ["USD", "EUR", "GBP"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment in case of insufficient fund ?",
    type: "radio",
    options: ["Yes", "No"],
    add_note: true,
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply the charges for the payment ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "chargeOptions",
    text: "Who wants to bear charges for the payment ?",
    type: "radio",
    options: ["BEN", "OUR", "SHA"],
  },
];
export const actrfMetaQuestions = [
  {
    key: "paymentThroughBeneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "No",
  },
  {
    key: "crossCurrencyPayments",
    text: "Do you need cross Currency Payments ?",
    value: "Yes",
  },
  {
    key: "exchangeRateNeeded",
    text: "Is exchange rate needed?",
    value: "Yes",
  },

  {
    key: "restrictionCheckAccounts",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit and Credit",
  },
  {
    key: "reserveFunds",
    text: "Do you need to Reserve funds ?",
    value: "Yes",
  },
  {
    key: "checkFundsAvailabilityWithCharges",
    text: "Do you want to check funds availability with charges ?",
    value: "Yes",
  },
  {
    key: "warehouseFutureDatedPayments",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "Yes",
  },
  {
    key: "checkDuplicateEntryPayment",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "Yes",
  },
  {
    key: "simulationForValidation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "Yes",
  },
];

// ACCOUNT TRANSFER OTHER QUESTIONS
export const actrfOtherUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have preferred name for this payment product?",
    type: "text",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you want to allow payments for future date ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "currencyId",
    text: "What are the currencies you need for this payment?",
    type: "checkbox",
    options: ["USD", "EUR", "GBP"],
  },
  {
    key: "TransactionLimit",
    text: "What is the Maximum limit for a single payment transaction ?",
    type: "range",
    options: ["10000"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment in case of insufficient fund ?",
    type: "radio",
    options: ["Yes", "No"],
    add_note: true,
  },
  {
    key: "checkFundsAvailabilityWithCharges",
    text: "Do you want to check funds availability with charges ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply the charges for the payment ?",
    type: "radio",
    options: ["Yes", "No"],
  },
];
export const actrfOtherMetaQuestions = [
  {
    key: "paymentThroughBeneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "No",
  },
  {
    key: "crossCurrencyPayments",
    text: "Do you need cross Currency Payments ?",
    value: "Yes",
  },
  {
    key: "exchangeRateNeeded",
    text: "Is exchange rate needed?",
    value: "Yes",
  },

  {
    key: "restrictionCheckAccounts",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit and Credit",
  },
  {
    key: "reserveFunds",
    text: "Do you need to Reserve funds ?",
    value: "Yes",
  },
  {
    key: "warehouseFutureDatedPayments",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "Yes",
  },
  {
    key: "checkDuplicateEntryPayment",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "Yes",
  },
  {
    key: "simulationForValidation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "Yes",
  },
];
// DOMESTIC QUESTIONS
export const domesticUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have preferred name for this payment product?",
    type: "text",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you want to allow payments for future date ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "currencyid",
    text: "Which currency you need for this payment?",
    type: "radio",
    options: ["USD", "EUR", "GBP"],
  },
  {
    key: "TransactionLimit",
    text: "What is the Maximum limit for a single payment transaction ?",
    type: "range",
    options: ["10000"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check Required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment?",
    type: "radio",
    options: ["Yes", "No"],
  },

  {
    key: "IBAN",
    text: "Do you need IBAN for this payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "BIC",
    text: "Do you need BIC for this payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "allowSortCode",
    text: "Do you need validate the beneficiary bank information ( clearing codes) for this payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
    type: "radio",
    options: ["Yes", "No"],
    add_note: true,
  },

  {
    key: "RateTolerantPercent",
    text: "What is the percentage of tolerance for transactions where exchange rate  exceeds a pre set  limit ?",
    type: "text",
    options: [],
  },

  {
    key: "CutOffTime",
    text: "what is the cut off time for the last payment to be processed in the same day?",
    type: "text",
    options: [],
    placeholder: "HH:MM",
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply charges for the Payments?",
    type: "radio",
    options: ["Yes", "No"],
  },
];
export const domesticMetaQuestions = [
  {
    key: "Beneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "Yes",
  },
  {
    key: "allowFx",
    text: "Do you need cross Currency Payments ?",
    value: "Yes",
  },
  {
    key: "FXRate",
    text: "Is exchange rate needed ?",
    value: "Yes",
  },

  {
    key: "Restriction",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit",
  },
  {
    key: "Reserve",
    text: "Do you need to Reserve funds ?",
    value: "Yes",
  },
  {
    key: "warehouseReqd",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "Yes",
  },
  {
    key: "Duplicate",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "Yes",
  },
  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "Yes",
  },
];

// SEPA QUESTIONS
export const SepaUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have preferred name for this payment product?",
    type: "text",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you want to allow payments for future date ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "TransactionLimit",
    text: "What is the Maximum limit for a single payment transaction ?",
    type: "range",
    options: ["10000"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "allowSortCode",
    text: "Do you need validate the beneficiary bank information ( clearing codes) for this payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
    type: "radio",
    options: ["Yes", "No"],
    add_note: true,
  },

  {
    key: "RateTolerantPercent",
    text: "What is the percentage of tolerance for transactions where exchange rate  exceeds a pre set  limit ?",
    type: "text",
    options: [],
  },

  {
    key: "CutOffTime",
    text: "what is the cut off time for the last payment to be processed in the same day?",
    type: "text",
    options: [],
    placeholder: "HH:MM",
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply charges for the Payments?",
    type: "radio",
    options: ["Yes", "No"],
  },
];
export const SepaMetaQuestions = [
  {
    key: "clearing_code",
    text: "Which Clearing will be used for this payment product?",
    value: "STEP2",
  },
  {
    key: "ccy",
    text: "What are the currencies you need for this payment? ",
    value: "EUR",
  },
  {
    key: "Beneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "Yes",
  },
  {
    key: "allowFx",
    text: "Do you need cross Currency Payments ?",
    value: "Yes",
  },
  {
    key: "FXRate",
    text: "Is exchange rate needed ?",
    value: "Yes",
  },

  {
    key: "Restriction",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit",
  },
  {
    key: "Reserve",
    text: "Do you need to Reserve funds ?",
    value: "Yes",
  },
  {
    key: "warehouseReqd",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "Yes",
  },
  {
    key: "Duplicate",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "Yes",
  },
  {
    key: "IBAN",
    text: "Do you need IBAN for this payment?",
    value: "Yes",
  },
  {
    key: "BIC",
    text: "Do you need BIC for this payment?",
    value: "Yes",
  },
  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "Yes",
  },
];

// SEPA INST QUESTIONS
export const SepaInstUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have preferred name for this payment product?",
    type: "text",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you want to allow payments for future date ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "TransactionLimit",
    text: "What is the Maximum limit for a single payment transaction ?",
    type: "range",
    options: ["10000"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "allowSortCode",
    text: "Do you need validate the beneficiary bank information ( clearing codes) for this payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
    type: "radio",
    options: ["Yes", "No"],
    add_note: true,
  },

  {
    key: "RateTolerantPercent",
    text: "What is the percentage of tolerance for transactions where exchange rate  exceeds a pre set  limit ?",
    type: "text",
    options: [],
  },

  {
    key: "CutOffTime",
    text: "what is the cut off time for the last payment to be processed in the same day?",
    type: "text",
    options: [],
    placeholder: "HH:MM",
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply charges for the Payments?",
    type: "radio",
    options: ["Yes", "No"],
  },
];
export const SepaInstMetaQuestions = [
  {
    key: "ccy",
    text: "What are the currencies you need for this payment? ",
    value: "EUR",
  },
  {
    key: "Beneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "Yes",
  },
  {
    key: "allowFx",
    text: "Do you need cross Currency Payments ?",
    value: "Yes",
  },
  {
    key: "FXRate",
    text: "Is exchange rate needed ?",
    value: "Yes",
  },

  {
    key: "clearing_code",
    text: "Which Clearing will be used for this payment product?",
    value: "EBAINST",
  },

  {
    key: "Restriction",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit",
  },
  {
    key: "Reserve",
    text: "Do you need to Reserve funds ?",
    value: "Yes",
  },
  {
    key: "warehouseReqd",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "Yes",
  },
  {
    key: "IBAN",
    text: "Do you need IBAN for this payment?",
    value: "Yes",
  },
  {
    key: "BIC",
    text: "Do you need BIC for this payment?",
    value: "Yes",
  },
  {
    key: "Duplicate",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "Yes",
  },
  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "Yes",
  },
];

// INATIONAL QUESTIONS
export const inationalUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have preferred name for this payment product?",
    type: "text",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you want to allow payments for future date ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "currencyid",
    text: "What are the currencies you need for this payment?",
    type: "checkbox",
    options: ["USD", "EUR", "GBP"],
  },
  {
    key: "TransactionLimit",
    text: "What is the Maximum limit for a single payment transaction ?",
    type: "range",
    options: ["10000"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
    type: "radio",
    options: ["Yes", "No"],
    add_note: true,
  },
  {
    key: "RateTolerantPercent",
    text: "What is the percentage of tolerance for transactions where exchange rate  exceeds a pre set  limit ?",
    type: "text",
    options: [],
  },
  {
    key: "CutOffTime",
    text: "what is the cut off time for the last payment to be processed in the same day?",
    type: "text",
    options: [],
    placeholder: "HH:MM",
  },
  {
    key: "allowChargeOption",
    text: "Do you want to apply charges for the Payments?",
    type: "radio",
    options: ["Yes", "No"],
  },
];
export const inationalMetaQuestions = [
  {
    key: "Beneficiary",
    text: "Should payment go through Beneficiary ?",
    value: "Yes",
  },
  {
    key: "allowFx",
    text: "Do you need cross Currency Payments ?",
    value: "Yes",
  },
  {
    key: "FXRate",
    text: "Is exchange rate needed ?",
    value: "Yes",
  },
  {
    key: "Restriction",
    text: "Is restriction check needed for debit and credit accounts ?",
    value: "Debit",
  },
  {
    key: "Reserve",
    text: "Do you need to Reserve funds ?",
    value: "Yes",
  },
  {
    key: "warehouseReqd",
    text: "Do you need warehouse to store the Future dated Payments ?",
    value: "Yes",
  },
  {
    key: "IBAN",
    text: "Do you need IBAN for this payment?",
    value: "Yes",
  },
  {
    key: "BIC",
    text: "Do you need BIC for this payment?",
    value: "Yes",
  },
  {
    key: "Duplicate",
    text: "Do you need to check Duplicate Entry for Payment ?",
    value: "Yes",
  },

  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
    value: "Yes",
  },
];

const getUserQuestion = (productType) => {
  switch (productType) {
    case "actrf":
      return {
        userQuestions: actrfUserQuestions,
        metaQuestions: actrfMetaQuestions,
      };
    case "actrf_other":
      return {
        userQuestions: actrfOtherUserQuestions,
        metaQuestions: actrfOtherMetaQuestions,
      };
    case "inational":
      return {
        userQuestions: inationalUserQuestions,
        metaQuestions: inationalMetaQuestions,
      };
    case "sepa_inst":
      return {
        userQuestions: SepaInstUserQuestions,
        metaQuestions: SepaInstMetaQuestions,
      };
    case "sepa":
      return {
        userQuestions: SepaUserQuestions,
        metaQuestions: SepaMetaQuestions,
      };
    case "domestic":
      return {
        userQuestions: domesticUserQuestions,
        metaQuestions: domesticMetaQuestions,
      };
  }
};
export default getUserQuestion;
