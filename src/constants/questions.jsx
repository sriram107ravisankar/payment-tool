// ACCOUNT TRANSFER HOME QUESTIONS
export const actrfUserQuestions = [
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
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
    key: "autoRetry",
    text: "Do you want the system to retry the processing of payment in case of insufficient fund ?",
    type: "radio",
    options: ["Yes", "No"],
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
    key: "simulationForValidation",
    text: "Do you need Simulation for the validation of Payment ?",
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
];

// ACCOUNT TRANSFER OTHER QUESTIONS
export const actrfOtherUserQuestions = [
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
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
    key: "autoRetry",
    text: "Do you want the system to retry the processing of payment in case of insufficient fund ?",
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
    key: "simulationForValidation",
    text: "Do you need Simulation for the validation of Payment ?",
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
];
// DOMESTIC QUESTIONS
export const domesticUserQuestions = [
  {
    key: "clearingName",
    text: "Do you have clearing name for the payment?",
    type: "input",
    options: "",
  },
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
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
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
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
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check Required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "RateTolerantPercent",
    text: "What is the percentage for transaction exceeding a pre set  exchange rate limit ?",
    type: "text",
    options: [],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment?",
    type: "radio",
    options: ["Yes", "No"],
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
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
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
];

// SEPA QUESTIONS
export const SepaUserQuestions = [
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
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
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
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
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "RateTolerantPercent",
    text: "What is the percentage for transaction exceeding a pre set  exchange rate limit ?",
    type: "text",
    options: [],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment ?",
    type: "radio",
    options: ["Yes", "No"],
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
    key: "ccy",
    text: "What are the currencies you need for this payment? ",
    value: "EUR",
  },
  {
    key: "clearing_code",
    text: "Which Clearing will be used for this payment product?",
    value: "STEP2",
  },
  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
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
];

// SEPA INST QUESTIONS
export const SepaInstUserQuestions = [
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
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
    key: "AutoRetry",
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
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
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges ?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "RateTolerantPercent",
    text: "What is the percentage for transaction exceeding a pre set  exchange rate limit ?",
    type: "text",
    options: [],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment ?",
    type: "radio",
    options: ["Yes", "No"],
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
    key: "ccy",
    text: "What are the currencies you need for this payment? ",
    value: "EUR",
  },
  {
    key: "clearing_code",
    text: "Which Clearing will be used for this payment product?",
    value: "EBAINST",
  },
  {
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
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
];

// INATIONAL QUESTIONS
export const inationalUserQuestions = [
  {
    key: "futureDate",
    text: "Do you need to allow payments to process in future?",
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
    text: "Do you want the system to retry the processing of payment incase of insufficient funds ?",
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
    key: "checkFundsWithCharges",
    text: "Do you want to check funds availability with charges?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "Fraud Check Reqd",
    text: "Is Fraud Check required for the Payment?",
    type: "radio",
    options: ["Yes", "No"],
  },
  {
    key: "RateTolerantPercent",
    text: "What is the percentage for transaction exceeding a pre set  exchange rate limit ?",
    type: "text",
    options: [],
  },
  {
    key: "Reachability Check",
    text: "Do you need to verify the receiver bank participation for payment ?",
    type: "radio",
    options: ["Yes", "No"],
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
    key: "Simulation",
    text: "Do you need Simulation for the validation of Payment ?",
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
