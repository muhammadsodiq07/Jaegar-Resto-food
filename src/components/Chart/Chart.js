import React from 'react'
import "./Chart.scss"
import Navbar from '../Navbar/Navbar'
import Orders from '../Orders/Orders'

function Chart(props) {
  return (
    <div className="chart">
      <div className="chart__navbar">
        <Navbar/>
      </div>
      <div>
        <h2>
          Chart
        </h2>
      </div>
      <div className="chart__order">
      <Orders
           save={props.save}
           setsave={props.setsave}
          />
      </div>
    </div>
  )
}

export default Chart
