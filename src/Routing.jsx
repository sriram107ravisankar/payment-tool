import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PaymentStatus from "./pages/PaymentStatus";
import NotFound from "./pages/NotFoundPage";
import FormState from "./context/formstate";
import ProductCreation from "./pages/ProductCreation";
function Routing() {
  useEffect(() => {
    // Check if localStorage is already initialized
    if (!localStorage.getItem("isInitialized")) {
      localStorage.setItem("actrf", "false");
      localStorage.setItem("actrf_other", "false");
      localStorage.setItem("inational", "false");
      localStorage.setItem("sepa", "false");
      localStorage.setItem("sepa_inst", "false");
      localStorage.setItem("domestic", "false");
      // Prevent re-initialization on subsequent renders
      localStorage.setItem("isInitialized", "true");
      console.log("localStorage initialized.");
    } else {
      console.log("localStorage already initialized.");
    }
  }, []);
  return (
    <FormState>
      <Router basename="/payment-tool/">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route
            path="account-transfer-form"
            element={<ProductCreation productType="actrf" />}
          />

          <Route
            path="account-others-form"
            element={<ProductCreation productType="actrf_other" />}
          />

          <Route
            path="inational-transfer-form"
            element={<ProductCreation productType="inational" />}
          />

          <Route
            path="sepa-instant-transfer-form"
            element={<ProductCreation productType="sepa_inst" />}
          />
          <Route
            path="sepa-transfer-form"
            element={<ProductCreation productType="sepa" />}
          />
          <Route
            path="domestic-transfer-form"
            element={<ProductCreation productType="domestic" />}
          />
          <Route path="payment-status" element={<PaymentStatus />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </FormState>
  );
}

export default Routing;
