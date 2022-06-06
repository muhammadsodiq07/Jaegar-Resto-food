import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/Vector.svg";
import vector from "../../assets/imgs/home.svg";
import vector3 from "../../assets/imgs/Vector3.svg";
import vector4 from "../../assets/imgs/Vector4.svg";
import vector5 from "../../assets/imgs/Vector5.svg";
import vector6 from "../../assets/imgs/Vector6.svg";
import vector7 from "../../assets/imgs/Vector7.svg";
import vector8 from "../../assets/imgs/Vector8.svg";

function Navbar() {
  return (
    <div id="menu-part">
      <NavLink to="/">
        <img
          className="main-logo"
          src={logo}
          alt="main-logo"
          width={45}
          height={45}
        />
      </NavLink>
      <nav>
        <ul className="nav-lists">
          <li  className="nav-item">
            <NavLink className="nav-link" to="/">
              <img
                className="home-img"
                src={vector}
                alt="home-img"
                width={30}
                height={30}
              />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <img src={vector3} alt="menu" width={30} height={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <img src={vector4} alt="contacts" width={30} height={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <img src={vector5} alt="messege" width={30} height={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <img src={vector6} alt="bell" width={30} height={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <img src={vector7} alt="settings" width={30} height={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/">
              <img src={vector8} alt="enter-icon" width={30} height={30} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
