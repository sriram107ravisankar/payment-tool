import { useState } from "react";
import { formContext } from "./formContext";

const FormState = (props) => {
  const [formData, setFormData] = useState({
    futureDate: "",
    autoRetry: "",
    applyCharges: "",
    currencyId: [],
    chargeOptions: "",
  });
  const updateFormState = ({
    futureDate,
    autoRetry,
    currencyId,
    applyCharges,
    chargeOptions,
  }) => {
    console.log(futureDate, autoRetry, currencyId);
    setFormData({
      ...formData,
      futureDate,
      autoRetry,
      applyCharges,
      currencyId,
      chargeOptions,
    });
  };

  //Data for account others
  const [otherformData, setOtherformData] = useState({
    futureDate: "",
    autoRetry: "",
    currencyId: [],
    maxLimit: "",
    checkFundCharge: "",
    allowCharge: "",
  });

  const updateOthersformState = ({
    futureDate,
    autoRetry,
    currencyId,
    maxLimit,
    checkFundCharge,
    allowCharge,
  }) => {
    console.log(
      futureDate,
      autoRetry,
      currencyId,
      maxLimit,
      checkFundCharge,
      allowCharge
    );
    setOtherformData({
      ...formData,
      futureDate,
      autoRetry,
      currencyId,
      maxLimit,
      checkFundCharge,
      allowCharge,
    });
  };

  return (
    <formContext.Provider
      value={{
        formData,
        updateFormState,
        otherformData,
        updateOthersformState,
      }}
    >
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
