import React from "react";
import "./pricing.css";

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <h2 className="section_title">Our Pricing Plans</h2>
      <span className="section_subtitle">Choose your best option</span>

      {/* Discount Alert */}
      <div className="discount_alert">
        <p className="alert_message">25% Off for the first 5 websites!</p>
      </div>

      <div className="pricing_container">
        {/* Row 1 - Basic Website Plans */}
        <div className="pricing_row centered_row">
          <div className="pricing_card">
            <h1 className="pricing_title">Small Website (Basic)</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">5-10 Pages</p>
            <p className="pricing_info">Includes 5 revisions</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Normal Website (Basic)</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Access to all features</p>
            <p className="pricing_info">Priority customer support</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Large Website (Basic)</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Access to all features</p>
            <p className="pricing_info">Dedicated account manager</p>
          </div>
        </div>

        {/* Row 2 - Additional Add-Ons */}
        <div className="pricing_row">
          <div className="pricing_card">
            <h1 className="pricing_title">Moderate Small Website</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Extra feature 1</p>
            <p className="pricing_info">Extra feature 2</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Complex Small Website</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Extra feature 1</p>
            <p className="pricing_info">Extra feature 2</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Moderate Normal Website</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Extra feature 1</p>
            <p className="pricing_info">Extra feature 2</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Complex Normal Website</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Extra feature 1</p>
            <p className="pricing_info">Extra feature 2</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Moderate Large Website</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Extra feature 1</p>
            <p className="pricing_info">Extra feature 2</p>
          </div>

          <div className="pricing_card">
            <h1 className="pricing_title">Complex Large Website</h1>
            <p className="pricing_price">$?</p>
            <p className="pricing_info">Extra feature 1</p>
            <p className="pricing_info">Extra feature 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
