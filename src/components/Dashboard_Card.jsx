import React from "react";
import greenTick from "../assets/green_tick_icon.png";

export default function DashboardCard(props) {
  const { product_type, payment_icon, payment_title, payment_description } =
    props;
  console.log(JSON.parse(localStorage.getItem(product_type)));

  return (
    <>
      {JSON.parse(localStorage.getItem(product_type)) ? (
        <img src={greenTick} className="green_tick"></img>
      ) : (
        <></>
      )}
      <div className="payment-icon">{payment_icon}</div>
      <h2 className="payment-title">{payment_title}</h2>
      <p className="payment-description">{payment_description}</p>
    </>
  );
}
