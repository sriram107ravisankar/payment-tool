import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/css/PaymentStatus.css";

import doneImage from "../assets/paymentdone.svg";

export default function PaymentStatus() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    success = false,
    version = "1",
    paymentId = "",
  } = location.state || {};

  const isUpdated = parseInt(version) > 1;

  return (
    <div className="status-container">
      <div className="status-card">
        <div className={`status-icon ${success ? "success" : "failure"}`}>
          {success ? (
            <img src={doneImage} alt="Payment Sucessful image" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                fill="red"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 
              10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 
              17 12 13.41 8.41 17 7 15.59 10.59 
              12 7 8.41 8.41 7 12 10.59 15.59 7 
              17 8.41 13.41 12 17 15.59z"
              />
            </svg>
          )}
        </div>
        <h1 className="status-title">
          {success
            ? isUpdated
              ? "Payment Product Successfully Updated"
              : "Payment Product Successfully Created"
            : "No new changes have been made. Please try again!"}
        </h1>
        {success && paymentId && (
          <p className="status-id">
            Payment Product ID: <strong>{paymentId}</strong>
          </p>
        )}
        <div>
          <button className="home-button" onClick={() => navigate("/")}>
            Go to Home
          </button>
          {success ? (
            <button
              className="home-button tool-home"
              onClick={() =>
                window.open(
                  "http://172.24.133.69/transact-explorer-wa",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Check the Product Created
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
