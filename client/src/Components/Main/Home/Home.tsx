// import React from 'react'
import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import './Home.css'
import Logo from "../../Shared/Logo/Logo"

const Home = () => {
  return (
    <div className="Home">
        <Logo />
        <Sidebar />

        <div className="container">
            <div className="balances border">
              <div className="bold lg">Balances</div>
              <br />
              <div>
                <div  className="span">
                  <div className="bold">Savings</div>
                  <div><span className="sub">$</span> 10,329.00</div>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="tracker">
              <div className="bold lg span"> 
                <div> Track where your money goes </div>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg>
              </div>
              {/* <div>
                <div></div>
              </div> */}
            </div>

            <br />
            <br />

            <button className="transparent underline btn">
                See past monthly statements
            </button>
        </div>

    </div>
  )
}

export default Home