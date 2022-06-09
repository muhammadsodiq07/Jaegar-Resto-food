import React from 'react'


function FoodItems(porps) {
  return (
    <>
     {porps.menuItems.map((food,i)=> {
              return (
                <>
                  <li key={i} 
                    onClick={() => porps.foodHandler(food)}
                  className="fooditem__item">
                      <img className="fooditem__img" src={food.img} alt="" />
                      <div className="fooditem__div">
                      <p className="fooditem__name">
                      {food.title}
                      </p>
                      <span className="fooditem__price">
                      $ {food.money}
                      </span>
                      <p className="fooditem__bowls">
                      {food.theRest} Bowls available
                      </p>
                      </div>
                  </li>
                </>
              )
            })}
    </>
  )
}

export default FoodItems
