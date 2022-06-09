import React, { useState } from "react";
import "./Settings.scss";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faBell,
  faBuilding,
  faDashboard,
  faLock,
  faPlus,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";

import data from "../../Object";
import AddModal from "../AddModal/AddModal";
import Edit from "../Edit/Edit";

function Settings(props) {
  let FilterBtn = ["All", ...new Set(data.map((item) => item.foodType))];
  let [type, setCategory] = useState(FilterBtn);

  const filterItem = (type) => {
    if (type === "All") {
      props.setMenuItems(data);
      return;
    }

    const newItems = data.filter((item) => {
      return item.foodType === type;
    });

    props.setMenuItems(newItems);
  };

  let [modal, setModal] = useState(false)


  let [element, setElement] = useState([])
  let [editOpen, setEditOpen] = useState(false)
  
  let editHander = (id) => {
    setElement(id)
    setEditOpen(!editOpen)
  }

  return (
    <div className="setting">
     
      <div className="setting__navbar">
        <Navbar />
      </div>
      <div>
        <h2 className="setting__title">Settings</h2>
        <div className="setting-menu setting">
          <ul className="setting__list">
            <li className="setting__item">
              <i className="bx setting__icon bx-heart"></i>
              <div className="setting__title-div">
                <h4>Appereance</h4>
                <p>Dark and Light mode, Font size</p>
              </div>
            </li>

            <li className="setting__item">
              <FontAwesomeIcon className="setting__icon" icon={faBuilding} />
              <div className="setting__title-div">
                <h4>Your Restaurant</h4>
                <p>Dark and Light mode, Font size</p>
              </div>
            </li>

            <li className="setting__item">
              <FontAwesomeIcon className="setting__icon" icon={faDashboard} />
              <div className="setting__title-div">
                <h4>Products Management</h4>
                <p>Manage your product, pricing, etc</p>
              </div>
            </li>

            <li className="setting__item">
              <FontAwesomeIcon className="setting__icon" icon={faBell} />
              <div className="setting__title-div">
                <h4>Notifications</h4>
                <p>Customize your notifications</p>
              </div>
            </li>

            <li className="setting__item">
              <FontAwesomeIcon className="setting__icon" icon={faLock} />
              <div className="setting__title-div">
                <h4>Security</h4>
                <p>Configure Password, PIN, etc</p>
              </div>
            </li>

            <li className="setting__item">
              <FontAwesomeIcon className="setting__icon" icon={faWarning} />
              <div className="setting__title-div">
                <h4>About Us</h4>
                <p>Find out more about Posly</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
        <div>
        <div className='product p-4 text-white'>
      <div className='product__management d-flex align-items-center justify-content-between mb-4'>
        <h3>Products Management</h3>
        <button className='product__btn'>
          <FontAwesomeIcon className='me-3' icon={faBarsProgress}/>
          Manage Categories
        </button>

      </div>

      <ul className='d-flex middle-part__list'>
        {type.map((item, i) =>{
          return (
            <li key={i} className='food-items'>
              <button onClick={() => filterItem(item)} className='food-links'>{item}</button>
            </li>
          )
        })}
      </ul>

      <ul className='d-flex product__list__wrap flex-wrap'>
        <li className="product__item__food">
        <button onClick={() =>  setModal(!modal)} className='product__add__btn'>
            <FontAwesomeIcon className='product__icon' icon={faPlus}/> <br/>
            Add new dish
          </button>
        </li>

        {props.menuItems.map(item =>{
          return (
            <li className='food-prices product__item__food' key={item.id}>
              <div className="d-flex flex-column justify-content-center align-items-center pt-3">
                <img className="food-images product__imgs" src={item.img} alt="spicy-food" width={135} height={135} />
                <p className="type-of-food">{item.title}</p>
                <div className='d-flex justify-content-center'>
                  <p className="price product__infos me-2">$ {item.money} </p>
                  <p className="amount-of-food product__infos">{item.theRest} Bowls</p>
                </div>
                <div className='edit-part d-flex justify-content-center align-items-center'>
                  <i className='bx edit-text fs-5 me-2 bx-edit-alt'></i>
                  <p
                  onClick={() => editHander(item)}
                  className='pt-3 edit-text'>Edit dish</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>

      <div className='d-flex product__btn__wrap'>
        <button className='bg-transparent products__button payment-type-btn me-3'>
          Discard Changes
        </button>
        <button className='bg-transparent products__button payment-type-btn'>Save Changes</button>
      </div>
       
    </div>
        </div>
        <AddModal
        modal={modal}
        setModal={setModal}
        menuItems={props.menuItems}
        setMenuItems={props.setMenuItems}
      />
      <Edit
      element={element}
      editOpen={editOpen}
      menuItems={props.menuItems}
      setEditOpen={setEditOpen}
      setMenuItems={props.setMenuItems}
      />
    </div>
  );
}

export default Settings;
