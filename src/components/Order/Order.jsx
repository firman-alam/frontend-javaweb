import React from "react";
import "./Order.scss";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="app__checkout">
      <div className="app__checkout-heading">
        <h1>Order</h1>
      </div>
      <div className="app__checkout-order">
        <div className="order__left">
          <div className="order__form">
            <h2>Form</h2>
            <form>
              <div className="form__input">
                <label htmlFor="DateIn">Date In</label>
                <input type="date" name="DateIn" id="DateIn" />
              </div>
              <div className="form__input">
                <label htmlFor="DateOut">Date Out</label>
                <input type="date" name="DateIn" id="DateOut" />
              </div>
              <div className="form__input">
                <label htmlFor="Guest">Guest</label>
                <input type="number" name="Guest" id="Guest" min={1} />
              </div>
              <div className="form__input">
                <label htmlFor="Type">Type Room</label>
                <input type="text" name="Type" id="Type" />
              </div>
            </form>
            <div className="order__total">
              <h3>Total</h3>
              <h3>Rp XXXXXX</h3>
            </div>
          </div>
          <div className="order__button">
            <button
              className="custom__button"
              onClick={() => navigate("/Payment")}
            >
              Order
            </button>
          </div>
        </div>
        <div className="order__right">
          <div className="order__descs">
            <h2>Description</h2>
            <div className="order__desc">
              <h3>Property Type</h3>
              <p>Apartment</p>
            </div>
            <div className="order__desc">
              <h3>Tower</h3>
              <p>Budi Luhur Apartment</p>
            </div>
            <div className="order__desc">
              <h3>Smoking</h3>
              <p>Smoking is not allowed.</p>
            </div>
            <div className="order__desc">
              <h3>Child Policies</h3>
              <p>
                Children of all ages are welcome. Children 7 and above are
                considered adults at this property.
              </p>
            </div>
            <div className="order__desc">
              <h3>Cleaning fee</h3>
              <p>
                Unit and linen will only be cleaned upon check out. Special
                requests during the stay will incur additional fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
