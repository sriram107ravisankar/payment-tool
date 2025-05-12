import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Dashboard.css";

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
              <div className="payment-icon">🏛️</div>
              <h2 className="payment-title">Account Transfer</h2>
              <p className="payment-description">(Same Customer - Same Bank)</p>
            </NavLink>

            {/* Option 2 */}
            <NavLink to="account-transfer-form" className="payment-option">
              <div className="payment-icon">🏦</div>
              <h2 className="payment-title">Account Transfer</h2>
              <p className="payment-description">
                (Different Customer - Same Bank)
              </p>
            </NavLink>

            {/* Option 3 */}
            <NavLink to="domestic-transfer-form" className="payment-option">
              <div className="payment-icon">🔁</div>
              <h2 className="payment-title">Domestic Payments</h2>
              <p className="payment-description"></p>
            </NavLink>

            {/* Option 4 */}
            <NavLink to="sepa-transfer-form" className="payment-option">
              <div className="payment-icon">🔄</div>
              <h2 className="payment-title">SEPA Payments</h2>
              <p className="payment-description"></p>
            </NavLink>

            {/* Option 5 */}
            <NavLink to="sepa-instant-transfer-form" className="payment-option">
              <div className="payment-icon">⚡</div>
              <h2 className="payment-title">
                SEPA-INSTPAY
                <br />
                Payments
              </h2>
              <p className="payment-description"></p>
            </NavLink>

            {/* Option 6 */}
            <NavLink to="inational-transfer-form" className="payment-option">
              <div className="payment-icon">🌍</div>
              <h2 className="payment-title">
                Cross Border
                <br />
                Payments
              </h2>
              <p className="payment-description"></p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
