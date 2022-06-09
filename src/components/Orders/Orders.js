import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import OrderItems from "./OrderItems";
import "./Orders.scss";

function Orders(props) {

  let [blocking, setBlocking] = useState(false);
  let mopenHandler = () => {
    setBlocking(!blocking);
  };
  const [changed, setchanged] = useState([]);
  const [total, settotal] = useState(0);

  let deleteHandler = (e) => {
    let idd = e.target.id;
    props.setsave(props.save.filter((item) => item.id !== +idd));
  };

  useEffect(() => {
    let num = 0;
    props.save.forEach((el) => {
      num += el.money;
    });
    settotal(num);

    let temp2 = [...new Set(props.save.map((item) => item))];
    setchanged(temp2);
  }, [props.save]);

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
          setsave={props.setsave}
          changed={changed}
          deleteHandler={deleteHandler}
          />
        </ul>
        <div className="order__bottom">
                <div className="order__discountbox">
                  <p className="order__discount">Discount</p>
                  <span className="order__span-count">0</span>
                </div>
                <div className="order__total">
                  <p className="order__discount">Sub total</p>
                  <span className="order__span-count">$ {total.toFixed(2)}</span>
                </div>
                <button onClick={mopenHandler} className="order__button">
                  Continue to Payment
                </button>
              </div>
      <Modal blocking={blocking} setBlocking={setBlocking} />
      </div>
    </div>
  );
}

export default Orders;
