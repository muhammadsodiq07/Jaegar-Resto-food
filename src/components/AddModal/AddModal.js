import React, { useState } from 'react'
import "./AddModal.scss"
import { v4 as uuidv4 } from "uuid";

function AddModal(props) {
  
  let [foodName, setFoodName] = useState('')
  let [foodPrice, setFoodPrice] = useState('')
  let [foodBowl, setBowl] = useState('')


  const foodNameHandler = (e) =>{
    setFoodName(e.target.value)
  }

  const foodPriceHandler = (e) =>{
    setFoodPrice(e.target.value)
  }  

  const foodBowlHandler = (e) =>{
    setBowl(e.target.value)
  }  
  
  const addFoodHandler = () =>{
    props.setModal(!props.modal)
    props.setMenuItems([
      {
        img: 'https://www.expatica.com/app/uploads/sites/5/2014/05/french-food-1920x1080.jpg',
        title: foodName,
        money: foodPrice,
        theRest: foodBowl,
        id:uuidv4(), 
      },
      ...props.menuItems,
    ])
    setFoodName('')
    setFoodPrice('')
    setBowl("")
  }

  return (
    <div>
<div className={`backdrop-add ${props.modal ? 'd-block' : 'd-none'}`}>
        <div className={`add-modal p-4 ${props.modal ? 'd-block' : 'd-none'}`}> 
           <h3 className='mb-4 text-white'>Add Food</h3>
           <form className='d-flex flex-column'>

             <label className='mb-2 text-white'>Food Name</label>
             <input onChange={foodNameHandler} className='mb-4' type="text" placeholder='Food Name' />

             <label className='mb-2 text-white'>Price</label>
             <input onChange={foodPriceHandler} className='mb-4' type="number" placeholder='$' />

             <label className='mb-2 text-white'>Bowl Count</label>
             <input 
             onChange={foodBowlHandler}
             type="number" placeholder='0' />
          </form>

            <div className='d-flex justify-content-center'>
              <div className='add-modal-btns'>
                <button onClick={() => props.setModal(!props.modal)} className='me-3'>Cancel</button>
                <button onClick={addFoodHandler}>Add</button>
              </div>
            </div>

        </div>
     </div>
    </div>
  )
}

export default AddModal
