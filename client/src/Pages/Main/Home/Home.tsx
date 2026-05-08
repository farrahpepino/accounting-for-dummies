import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import './Home.css'
import Logo from "../../Shared/Logo/Logo"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { GetBalance } from "../../../Services/GetBalance"

const Home = () => {

  const navigate = useNavigate();
  const types = ["Checking", "Credit", "Savings"]
  const [balances, setBalances] = useState({
    Checking: 0,
    Credit: 0,
    Savings: 0
  });


  useEffect(() => {

    const fetchBalances = async () => {

      const checkingBalance = await GetBalance("Checking");
      const creditBalance = await GetBalance("Credit");
      const savingsBalance = await GetBalance("Savings");

      setBalances({
        Checking: checkingBalance,
        Credit: creditBalance,
        Savings: savingsBalance
      });
    };

    fetchBalances();

  }, []);

  return (
    <div className="Home">
        <Logo />
        <Sidebar />
        {(balances.Checking===0 && balances.Credit===0 && balances.Savings===0) ? 
            <div className="container sub">
              <div className="center v-center">No data available</div> 
            </div> :
          <div className="container">
              <div className="balances-box border">
                <div className="bold lg">Balances</div>
                <br />
                {types.map((type) => (
                <div key={type}>

                  <div className="balance-span">
                    <div className="bold">{type}</div>
                    <div>
                      {
                        balances[type as keyof typeof balances]
                          .toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })
                      }
                      <span className="sub"> USD</span>


                    </div>

                  </div>
                </div>
              ))}
    
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

              <button className="transparent underline black ml-5 w-11" onClick={()=>navigate("/statements")}>
                  See past monthly statements
              </button>
          </div>
      }
    </div>
  )
}

export default Home