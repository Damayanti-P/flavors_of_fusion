import React, { useState } from "react";
// import "./Checkout.css";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log(formData);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h1>Checkout</h1>

        {/* Billing Information */}
        <section>
          <h2>Billing Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </section>

        {/* Payment Details */}
        <section>
          <h2>Payment Details</h2>
          <form>
            <div className="form-group">
              <label>Name on Card</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Expiry Date</label>
              <input
                type="month"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </form>
        </section>

        {/* Order Summary */}
        <section>
          <h2>Order Summary</h2>
          <div className="order-summary">
            <p>Item 1 <span>$50.00</span></p>
            <p>Item 2 <span>$30.00</span></p>
            <p>Tax <span>$8.00</span></p>
            <hr />
            <p>Total <span>$88.00</span></p>
          </div>
        </section>

        {/* Submit Button */}
        <button className="checkout-button" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
