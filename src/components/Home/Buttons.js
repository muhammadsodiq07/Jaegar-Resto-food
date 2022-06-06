import React from 'react'

function Buttons(props) {
  return (
    <div className="btns-container">
      {props.foodType.map((foodType) => {
        return (
          <button
            key={foodType}
            className="home__btn"
            onClick={() => props.filterItems(foodType)}>
            {foodType}
          </button>
        );
      })}
    </div>
  )
}

export default Buttons
