import React from 'react'
import "./Mail.scss"
import Navbar from '../Navbar/Navbar'
import Orders from '../Orders/Orders'

function Mail(props) {
  return (
    <div className="mail">
      <div className="mail__navbar">
        <Navbar/>
      </div>
      <div>
        <h2>Mail</h2>
      </div>
      <div className="mail__order">
      <Orders
           save={props.save}
           setsave={props.setsave}
          />
      </div>
    </div>
  )
}

export default Mail
