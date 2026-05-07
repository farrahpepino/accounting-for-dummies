import Logo from "../../Shared/Logo/Logo"
import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import './AccountAdd.css'
import { useNavigate } from "react-router-dom"

const Account = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Logo />
            <Sidebar />
    
            <div className='container'>
                <div className='box border'>
                    <div className="span">
                        <button title="back" onClick={()=> navigate("/accounts")} className="transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                        </button>
                        <div className="bold lg">Add Account</div>
                    </div>
                    <br /><br /><br />
                    <form action="">
                        <div>
                            <div>
                                <strong>Type</strong>
                                <br />
                                <br />
                                <div className="span  ml-6">
                                    <div className="span mr-2">
                                        <div className="option-btn"></div>
                                        <span>Income</span>
                                    </div>
                                    <div className="span mr-2">
                                        <div className="option-btn"></div>
                                        <span>Expense</span>
                                    </div>
                                    <div className="span mr-2">
                                        <div className="option-btn"></div>
                                        <span>Transfer</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div>
                                <strong>Bank</strong>
                                <br />
                                <input type="text" title="bank" name="bank" id="bank" className="border ml-6 mt" />
                            </div>
                            <br />
                            <br />
                            <div>
                                <strong>Balance</strong>
                                <br />
                                <div className="ml-6 mt">0.00</div>
                            </div>
                            <br />
                            <br />
                            <div>
                                <strong>Date</strong>
                                <br />
                                <span className="span ml-6 mt">
                                    <div>September 14, 2026</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                                </span>
                            </div>
                            <br />
                            <br />
                            <div>
                                <strong>Last 4 digits</strong>
                                <br />
                                <input type="number" title="four_digits" name="four_digits" id="four_digits" className="border ml-6 mt" pattern="^\S+$"/>
                            </div>
                        </div>
                    </form>

                    <br /><br /><br />

                    <div className="span set-buttons">
                        <button className="red-btn btn">Clear</button>
                        <button className="green-btn btn">Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account