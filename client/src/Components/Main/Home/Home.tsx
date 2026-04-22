// import React from 'react'
import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
        <Sidebar />
        <div className="container">
            <div className="balances">
            
            </div>

            <div className="graphs">

            </div>

            <button className="transparent underline">
                See past monthly statements
            </button>
        </div>
    </div>
  )
}

export default Home