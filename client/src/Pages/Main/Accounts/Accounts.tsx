import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import Logo from "../../Shared/Logo/Logo"
import './Accounts.css'
import { useNavigate } from "react-router-dom"

const Accounts = () => {

    const navigate = useNavigate();

  return (
    <div>
        <Logo />
        <Sidebar />

        <div className="container">
            <div className="border box">
                <div className="span space-between">
                    <div className="bold lg">Accounts</div>
                    <button className="bt-transparent sub" onClick={()=>navigate("/add-account")}>+ Add an account</button>
                </div>
                <br /><br /><br />
                <div className="ml-2">
                    <div className="span bold lg">
                        Checking
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
                    </div>
                    <br />
                    <div className="span ml-2">
                        BofA Checking •••• 6578
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M249.23-420q-24.75 0-42.37-17.63-17.63-17.62-17.63-42.37 0-24.75 17.63-42.37Q224.48-540 249.23-540q24.75 0 42.38 17.63 17.62 17.62 17.62 42.37 0 24.75-17.62 42.37Q273.98-420 249.23-420ZM480-420q-24.75 0-42.37-17.63Q420-455.25 420-480q0-24.75 17.63-42.37Q455.25-540 480-540q24.75 0 42.37 17.63Q540-504.75 540-480q0 24.75-17.63 42.37Q504.75-420 480-420Zm230.77 0q-24.75 0-42.38-17.63-17.62-17.62-17.62-42.37 0-24.75 17.62-42.37Q686.02-540 710.77-540q24.75 0 42.37 17.63 17.63 17.62 17.63 42.37 0 24.75-17.63 42.37Q735.52-420 710.77-420Z"/></svg>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Accounts