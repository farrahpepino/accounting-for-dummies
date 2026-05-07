import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar"
import Logo from "../../Shared/Logo/Logo"

const AccountEdit = () => {
    return (
        <div>
            <Logo />
            <Sidebar />
    
            <div className='container'>
                <div className='box border'>
                    <div className="span">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>
                        <div className="bold lg">Edit Account</div>
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
                                <div className="span ml-6 mt">
                                    <span>BofA (Bank of America)</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
                                </div>
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
                                <div className="sub ml-6 mt">September 14, 2026 (Edited)</div>
                            </div>
                            <br />
                            <br />
                            <div className="span">
                                <strong>Last 4 digits</strong>
                                <br />
                                <div className="sub">9155</div>
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

export default AccountEdit