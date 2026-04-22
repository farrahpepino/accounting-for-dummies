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
              <div className="bold lg"> 
                Track where your money goes
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