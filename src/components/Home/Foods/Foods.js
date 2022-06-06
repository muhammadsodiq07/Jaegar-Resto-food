import React from 'react'
import FoodItems from './FoodItems';
import "./Foods.scss";

function Foods(props) {
  return (
    <div>
        <div className="food__title-main">
            <h2 className="food__title">
            Choose Dishes
            </h2>
            <select className="food__select">
              <option value="Dine In">
              Dine In
              </option>
              <option value="Dine In">
              Hot
              </option>
              <option value="Dine In">
              Soup
              </option>
            </select>
        </div>
        <ul className="food__list">
            <FoodItems
            menuItems={props.menuItems}
            foodHandler={props.foodHandler}
            />
        </ul>
    </div>
  )
}

export default Foods
