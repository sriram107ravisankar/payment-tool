import { useState } from "react";
import { formContext } from "./formContext";

const FormState = (props) => {
  const [formData, setFormData] = useState({
    futureDate: "",
    autoRetry: "",
    currencyId: [],
  });
  const updateFormState = ({ futureDate, autoRetry, currencyId }) => {
    console.log(futureDate, autoRetry, currencyId);
    setFormData({
      ...formData,
      futureDate,
      autoRetry,
      currencyId,
    });
  };
  return (
    <formContext.Provider value={{ formData, updateFormState }}>
      {props.children}
    </formContext.Provider>
  );
};

export default FormState;
