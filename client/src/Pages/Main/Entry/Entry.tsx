import { useState } from "react";
import Logo from "../../Shared/Logo/Logo";
import Sidebar from "../../Shared/Navigation/Sidebar/Sidebar";
import './Entry.css';

const Entry = () => {

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const [formData, setFormData] = useState({
        user_id: user.id,
        date: new Date().toISOString().split("T")[0],
        type: "",
        from_account: "",
        to_account: "",
        category: "",
        amount: "",
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleType = (type: string) => {
        setFormData((prev) => ({
            ...prev,
            type
        }));
    };

    const handleCategory = (category: string) => {
        setFormData((prev) => ({
            ...prev,
            category
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(formData);
    };

    const handleClear = () => {
        setFormData({
            user_id: user.id,
            date: new Date().toISOString().split("T")[0],
            type: "",
            from_account: "",
            to_account: "",
            category: "",
            amount: "",
            note: ""
        });
    };

    return (
        <div>
            <Logo />
            <Sidebar />
    
            <div className='container'>
                <div className='box border'>

                    <div className="bold lg">New Transaction Entry</div>

                    <br /><br /><br />

                    <form onSubmit={handleSubmit}>

                        <div>

                            <div className="span">
                                <strong className="mr-2">Date</strong>

                                <input
                                    title="date"
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="border input"
                                />
                            </div>

                            <br />

                            <div>

                                <strong>Type</strong>

                                <div className="span mt ml-4">

                                    <div
                                        className="span mr-2"
                                        onClick={() => handleType("Income")}
                                    >
                                        <div className={`option-btn ${formData.type === "Income" ? "selected" : ""}`}></div>
                                        <span>Income</span>
                                    </div>

                                    <div
                                        className="span mr-2"
                                        onClick={() => handleType("Expense")}
                                    >
                                        <div className={`option-btn ${formData.type === "Expense" ? "selected" : ""}`}></div>
                                        <span>Expense</span>
                                    </div>

                                    <div
                                        className="span mr-2"
                                        onClick={() => handleType("Transfer")}
                                    >
                                        <div className={`option-btn ${formData.type === "Transfer" ? "selected" : ""}`}></div>
                                        <span>Transfer</span>
                                    </div>

                                </div>
                            </div>

                            <br />

                            <div className="span">

                                <div className="span">
                                    <strong>From</strong>

                                    <div className="span ml-2 mr-2 digits-parent">
                                        <span className="gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#938D8D"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>
                                            5678
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>

                                        <div className="border digits-child">
                                            <div>4120</div>
                                        </div>
                                    </div>

                                   
                                </div>

                                <div className="span">
                                    <strong>To</strong>

                                    <div className="span ml-2 mr-2 digits-parent">
                                        <span className="gap-5">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#938D8D"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>
                                            5678
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
                                    
                                        <div className="border digits-child">
                                            <div>4120</div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <br />

                            <div>

                                <strong>Category</strong>

                                <div className="mt ml-4">

                                    <div
                                        className="span"
                                        onClick={() => handleCategory("Essentials")}
                                    >
                                        <div className={`option-btn ${formData.category === "Essentials" ? "selected" : ""}`}></div>
                                        <span>Essentials</span>
                                    </div>

                                    <br />

                                    <div
                                        className="span"
                                        onClick={() => handleCategory("Lifestyle")}
                                    >
                                        <div className={`option-btn ${formData.category === "Lifestyle" ? "selected" : ""}`}></div>
                                        <span>Lifestyle</span>
                                    </div>

                                    <br />

                                    <div
                                        className="span"
                                        onClick={() => handleCategory("Growth")}
                                    >
                                        <div className={`option-btn ${formData.category === "Growth" ? "selected" : ""}`}></div>
                                        <span>Growth</span>
                                    </div>

                                    <br />

                                    <div
                                        className="span"
                                        onClick={() => handleCategory("Misc")}
                                    >
                                        <div className={`option-btn ${formData.category === "Misc" ? "selected" : ""}`}></div>
                                        <span>Misc</span>
                                    </div>

                                </div>
                            </div>

                            <br />

                            <div className="span">
                                <strong>Amount</strong>

                                <input
                                    title="amount"
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="border ml-2 input"
                                />
                            </div>

                            <br />

                            <div className="span">
                                <strong>Note</strong>

                                <input
                                    type="text"
                                    title="note"
                                    name="note"
                                    id="note"
                                    value={formData.note}
                                    onChange={handleChange}
                                    className="border ml-2 input"
                                />
                            </div>

                        </div>

                    </form>

                    <br /><br /><br />

                    <div className="span set-buttons">

                        <button
                            type="button"
                            className="red-btn btn"
                            onClick={handleClear}
                        >
                            Clear
                        </button>

                        <button
                            type="submit"
                            className="green-btn btn"
                            onClick={(e) => {
                                const form = e.currentTarget.closest("form");

                                if (form) {
                                    form.requestSubmit();
                                }
                            }}
                        >
                            Add
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Entry;