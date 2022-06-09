import React from "react";
import Navbar from "../Navbar/Navbar";
import Orders from "../Orders/Orders";
import "./Discount.scss";
function Discount(props) {
  return (
    <div className="discount">   
        <div className="discount__navabar">
        <Navbar/>
        </div>
        <div>
        <h2>Discount</h2>
        </div>
        <div className="discount__order">
          <Orders
           save={props.save}
           setsave={props.setsave}
          />
        </div>
    </div>
  );
}

export default Discount;
