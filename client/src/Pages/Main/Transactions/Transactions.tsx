import './Transactions.css';
import Logo from '../../Shared/Logo/Logo';
import Sidebar from '../../Shared/Navigation/Sidebar/Sidebar';
import { CompactNumber } from '../../../Services/CompactNumber';

const Transactions = () => {

    const entities = [
        "Date", "Type", "Account", "Amount", "Debit", "Credit", "Balance"
    ];

    const transactions = [
        {
            id: 1,
            Date: "01/20/26",
            Type: "Expense",
            Account: "9155",
            Amount: 170000.98,
            Debit: null,
            Credit: 170000.98,
            Balance: 6100002.02
        },
        {
            id: 2,
            Date: "01/20/26",
            Type: "Income",
            Account: "9155",
            Amount: 39999900.00,
            Debit: 63000.00,
            Credit: null,
            Balance: 630.00
        }
    ];

    return (
        <div>
            <Logo />
            <Sidebar />

            <div className='container'>
                <div className='box border'>
                    <div className="span heading">
                        <div className="bold lg">Transactions</div>

                        <div className='span'>
                            <div className='green border span'>
                                <div>Checking</div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                    <path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/>
                                </svg>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                                <path d="M213.85-180v-284.62h-80v-40h200v40h-80V-180h-40Zm0-435.38V-780h40v164.62h-40Zm166.15 0v-40h80V-780h40v124.62h80v40H380ZM460-180v-324.62h40V-180h-40Zm246.15 0v-124.62h-80v-40h200v40h-80V-180h-40Zm0-275.38V-780h40v324.62h-40Z"/>
                            </svg>
                        </div>
                    </div>

                    <br /><br /><br />

                    <table>
                        <thead>
                            <tr className="span divider">
                                {entities.map((entity, index) => (
                                    <th key={index} className="bold rows">
                                        {entity}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className='span divider'>

                                    <td>{transaction.Date}</td>
                                    <td>{transaction.Type}</td>
                                    <td className='gap-5'>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#938D8D"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>
                                        {transaction.Account}
                                    </td>

                                    <td>
                                        <span className='sub mr-5'>$</span>
                                        {transaction.Amount ? CompactNumber(transaction.Amount) : ""}
                                    </td>

                                    <td>
                                        {transaction.Debit ? (
                                            <div className="debit">
                                                <span className='sub mr-5'>$</span>
                                                {CompactNumber(transaction.Debit)}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </td>

                                    <td>
                                        {transaction.Credit ? (
                                            <div className="credit">
                                                <span className='sub mr-5'>$</span>
                                                {CompactNumber(transaction.Credit)}
                                            </div>
                                        ) : (
                                            ""
                                        )}
                                    </td>

                                    <td>
                                        <span className='sub mr-5'>$</span>
                                        {transaction.Balance ? CompactNumber(transaction.Balance) : ""}
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className='pages sub xs span'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/>
                        </svg>

                        <div>Pages <strong>1</strong> / 10</div>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
                            <path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Transactions;