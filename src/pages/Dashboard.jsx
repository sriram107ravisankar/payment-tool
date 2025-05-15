import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Dashboard.css";
import DashboardCard from "../components/Dashboard_Card";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-wrapper">
        <div className="dashboard-card">
          <h1 className="dashboard-title">
            Select the type of payment product to create
          </h1>

          <div className="cards-wrapper">
            {/* Option 1 */}
            <NavLink to="account-transfer-form" className="payment-option">
              <DashboardCard
                product_type="actrf"
                payment_icon="🏛️"
                payment_title="Account Transfer"
                payment_description="(Same Customer - Same Bank)"
              />
            </NavLink>

            {/* Option 2 */}
            <NavLink to="account-others-form" className="payment-option">
              <DashboardCard
                product_type="actrf_other"
                payment_icon="🏦"
                payment_title="Account Transfer"
                payment_description="(Different Customer - Same Bank)"
              />
            </NavLink>

            {/* Option 3 */}
            <NavLink to="domestic-transfer-form" className="payment-option">
              <DashboardCard
                product_type="domestic"
                payment_icon="🔁"
                payment_title="Domestic Payments"
                payment_description=""
              />
            </NavLink>

            {/* Option 4 */}
            <NavLink to="sepa-transfer-form" className="payment-option">
              <DashboardCard
                product_type="sepa"
                payment_icon="🔄"
                payment_title="SEPA Payments"
                payment_description=""
              />
            </NavLink>

            {/* Option 5 */}
            <NavLink to="sepa-instant-transfer-form" className="payment-option">
              <DashboardCard
                product_type="sepa_inst"
                payment_icon="⚡"
                payment_title="SEPA-INSTPAY Payments"
                payment_description=""
              />
            </NavLink>

            {/* Option 6 */}
            <NavLink to="inational-transfer-form" className="payment-option">
              <DashboardCard
                product_type="inational"
                payment_icon="🌍"
                payment_title="Cross Border Payments"
                payment_description=""
              />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
