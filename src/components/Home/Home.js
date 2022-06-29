import React from "react";
import "./Home.scss";
import Navbar from "../Navbar/Navbar";
import Buttons from "./Buttons";
import Foods from "./Foods/Foods";
import Orders from "../Orders/Orders";
import Search from "../Search/Search";




function Home(props) {

   return (
    <div className="home">
      <div className="home__navbar">
        <Navbar />
      </div>
      <div className="home__center">
        <div className="home__title-main">
          <div className="home__title-div">
            <h1 className="home__title">
            Jaegar Resto
            </h1>
            <p className="home__text">
            Tuesday, 2 Feb 2021
            </p>
          </div>
          <Search
          setMenuItems={props.setMenuItems}
          />
        </div>
        <div className="home__button-div">
        <Buttons filterItems={props.filterItems} foodType={props.foodType} />
        </div>
        <div>
          <Foods
          menuItems={props.menuItems}
          foodHandler={props.foodHandler}
          />
        </div>
      </div>
      <div className="home__order">
            <Orders
             save={props.save}
             setsave={props.setsave}
             count={props.count}
            />
      </div>
    </div>
  );
}

export default Home;
