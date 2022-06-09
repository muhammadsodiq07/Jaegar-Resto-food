import React from 'react'
import "./Bell.scss"
import Navbar from '../Navbar/Navbar'
import Orders from '../Orders/Orders'

function Bell(props) {
  return (
    <div className="bell">
      <div className="bell__navbar">
          <Navbar/>
      </div>
      <div>
        <h2>
          Bell
        </h2>
      </div>
      <div className="bell__order">
      <Orders
           save={props.save}
           setsave={props.setsave}
          />
      </div>
    </div>
  )
}

export default Bell
