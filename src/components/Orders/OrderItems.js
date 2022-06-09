import React from "react";
import "./OrderItems.scss";
import deleteimg from "../../assets/imgs/delete.svg";

function OrderItems(props) {
  return (
    <>
      {props.changed.map((item, i) => {
        return (
          <>
            <li className="orderitems">
              <div className="orderitems__main-div">
                <div className="orderitems__img-div">
                  <img className="orderitems__img" src={item.img} alt="" />
                  <div className="orderitems__name-div">
                    <p className="orderitems__name">{item.title}</p>
                    <span className="orderitems__price-save">
                      $ {item.money}
                    </span>
                  </div>
                </div>
                <div className="orderitems__count-div">
                  <p className="orderitems__count">{item.num}</p>
                  <p className="orderitems__price">
                    $ {(item.money * item.num).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="orderitems__input-main">
                <input
                  className="orderitems__input"
                  type="text"
                  placeholder="Please, just a little bit spicy only."
                />
                <button
                  onClick={props.deleteHandler}
                  id={item.id}
                  className="orderitems__deltee"
                >
                  <img
                    onClick={props.deleteHandler}
                    id={item.id}
                    src={deleteimg}
                    alt=""
                  />
                </button>
              </div>
            </li>
          </>
        );
      })}
    </>
  );
}

export default OrderItems;
