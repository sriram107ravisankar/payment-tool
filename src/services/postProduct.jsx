import postAccountTransfer from "./postActrf";
import postAccountTransferOther from "./postActrfOther";
import postDomesticTransfer from "./postDomesticTransfer";
import postSepaInstTransfer from "./postSepaInstTransfer";
import postSepaTransfer from "./postSepaTransfer";
import postInationalTransfer from "./postInationalTransfer";

const postProductCreation = async (productType, formData) => {
  switch (productType) {
    case "actrf":
      return await postAccountTransfer(formData);
    case "actrf_other":
      return await postAccountTransferOther(formData);
    case "inational":
      return await postInationalTransfer(formData);
    case "sepa_inst":
      return await postSepaInstTransfer(formData);
    case "sepa":
      return await postSepaTransfer(formData);
    case "domestic":
      return await postDomesticTransfer(formData);
  }
};
export default postProductCreation;
