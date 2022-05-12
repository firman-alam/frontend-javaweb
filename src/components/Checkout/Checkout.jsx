import React from "react";
import images from "../../constants/images";
import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="app__checkout">
      <div className="app__checkout-heading">
        <h1>Payment</h1>
      </div>
      <div className="app__checkout-payment">
        <div className="payment-left">
          <div className="payment-type">
            <h2>Choose type payment</h2>
            <form>
              <div className="bank-type">
                <input type="radio" name="bank" id="bri" />
                <label htmlFor="bri">
                  <img src={images.bri} alt="bri" />
                </label>
              </div>
              <div className="bank-type">
                <input type="radio" name="bank" id="bca" />
                <label htmlFor="bca">
                  <img src={images.bca} alt="bca" />
                </label>
              </div>
              <div className="bank-type">
                <input type="radio" name="bank" id="bni" />
                <label htmlFor="bni">
                  <img src={images.bni} alt="bni" />
                </label>
              </div>
              <div className="bank-type">
                <input type="radio" name="bank" id="mandiri" />
                <label htmlFor="mandiri">
                  <img src={images.mandiri} alt="mandiri" />
                </label>
              </div>
            </form>
          </div>
          <button className="payment-button">Check Out</button>
        </div>
        <div className="payment-right">
          <div className="payment-total">
            <h2>Total</h2>
            <div className="numb-transc">
              <h3>No. Transaction</h3>
              <p>xxxxxx</p>
            </div>
            <div className="desc-transc">
              <div className="unit">
                <div className="unit-1">
                  <p>Check In</p>
                  <p>xx-xx-xxxx</p>
                </div>
                <div className="unit-1">
                  <p>Check Out</p>

                  <p>xx-xx-xxxx</p>
                </div>
                <div className="unit-1">
                  <p>Guest</p>
                  <p>xx</p>
                </div>
              </div>
              <div className="total">
                <h3>Total</h3>
                <p>IDR 999,999,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
