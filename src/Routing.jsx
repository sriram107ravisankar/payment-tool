import React from "react";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AccountTransferForm from "./pages/AccountTransferForm";
import AccountTransferSummary from "./pages/AccountTransferSummary";
import PaymentStatus from "./pages/PaymentStatus";
import NotFound from "./pages/NotFoundPage";
import FormState from "./context/formState";
import InationalTransfer from "./pages/InationalTransfer";
import SepaInstantTransfer from "./pages/SepaInstantTransfer";
import SepaTransfer from "./pages/SepaTransfer";
function Routing() {
  return (
    <FormState>
      <Router basename="/payment-tool/">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route
            path="account-transfer-form"
            element={<AccountTransferForm />}
          />
          <Route
            path="account-transfer-summary"
            element={<AccountTransferSummary />}
          />
          <Route
            path="inational-transfer-form"
            element={<InationalTransfer />}
          />
          <Route
            path="sepa-instant-transfer-form"
            element={<SepaInstantTransfer />}
          />
          <Route path="sepa-transfer-form" element={<SepaTransfer />} />
          <Route path="payment-status" element={<PaymentStatus />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </FormState>
  );
}

export default Routing;
