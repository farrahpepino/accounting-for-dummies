import Logo from "../../Shared/Logo/Logo"
import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import './Entry.css'

const Entry = () => {
    return (
        <div>
            <Logo />
            <Sidebar />
    
            <div className='container'>
                <div className='box border'>
                    <div className="bold lg">New Transaction Entry</div>
                    <br /><br /><br />
                    <form action="">
                        <div>
                            <div className="span">
                                <strong className="mr-2">Date</strong>
                                <div>September 14, 2026</div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                            </div>
                            <br />
                            <div>
                                <strong>Type</strong>
                                <div className="span mt ml-4">
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
                            <div className="span">
                                <div className="span">
                                    <strong>From</strong>
                                    <div className="span ml-2 mr-2">
                                        <span>BofA Checking 5678</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
                                    </div>
                                </div>

                                <div className="span">
                                    <strong>To</strong>
                                    <div className="span ml-2">
                                        <span>BofA Savings 9218</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div>
                                <strong>Category</strong>
                                <div className="mt ml-4">
                                    <div className="span">
                                        <div className="option-btn"></div>
                                        <span>Essentials</span>
                                    </div>
                                    <br />
                                    <div className="span">
                                        <div className="option-btn"></div>
                                        <span>Lifestyle</span>
                                    </div>
                                    <br />
                                    <div className="span">
                                        <div className="option-btn"></div>
                                        <span>Growth</span>
                                    </div>
                                    <br />
                                    <div className="span">
                                        <div className="option-btn"></div>
                                        <span>Misc</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="span">
                                <strong>Amount</strong>
                                <div className="ml-2">0.00</div>
                            </div>
                            <br />
                            <div className="span">
                                <strong>Note</strong>
                                <input type="text" title="note" name="note" id="note" className="border ml-2"/>
                            </div>
                        </div>
                    </form>

                    <div className="span buttons">
                        <button className="red-btn btn">Clear</button>
                        <button className="green-btn btn">Add</button>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Entry