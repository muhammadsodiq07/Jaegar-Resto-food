import React from "react";
import OrderItems from "./OrderItems";
import "./Orders.scss";

function Orders(props) {
  return (
    <div className="order">
      <div className="order__container">
        <h3 className="order__title">Orders #34562</h3>
        <div className="order__buttons">
          <button className="order__btn active__btn">Dine In</button>
          <button className="order__btn">To Go</button>
          <button className="order__btn">Delivery</button>
        </div>
        <div className="order__item-main">
          <div className="order__item-div"> 
              <p className="order__items">
              Item
              </p>
          </div>
          <div className="order__item-price">
            <p className="order__items qty">
            Qty
            </p>
            <p className="order__items">
            Price
            </p>
          </div>
        </div>
        <hr/>
        <ul className="order__list">
          <OrderItems
          save={props.save}
          count={props.count}
          />
        </ul>
      </div>
    </div>
  );
}

export default Orders;
