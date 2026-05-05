import './Transactions.css';
import Logo from '../../Shared/Logo/Logo';
import Sidebar from '../../Shared/Navigation/Sidebar/Sidebar';
import { CleanDigits } from '../../../Services/CleanDigits';

const Transactions = () => {

    const entities = [
        "Date", "Type", "Account", "Amount", "Debit", "Credit", "Balance"
    ];

    const transactions = [
        {
            "id": 1,
            "Date": "01/20/26",
            "Type": "Expense",
            "Account": "BofA 9155",
            "Amount": 17.98,
            "Debit": null,
            "Credit": 17.98,
            "Balance": 612.02
        },
        {
            "id": 2,
            "Date": "01/20/26",
            "Type": "Income",
            "Account": "BofA 9155",
            "Amount": 300.00,
            "Debit": 630.00,
            "Credit": null,
            "Balance": 630.00
        }
    ] 

  return (
    <div>
        <Logo />
        <Sidebar />

        <div className='container'>
            <div className='box border'>
                <div className="span heading">
                    <div className="bold lg">Transactions</div>
                    <div>
                        <div className='span'>
                            <div className='green border span'>
                                <div>Checking</div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-357.85 253.85-584 296-626.15l184 184 184-184L706.15-584 480-357.85Z"/></svg>
                                </div>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M213.85-180v-284.62h-80v-40h200v40h-80V-180h-40Zm0-435.38V-780h40v164.62h-40Zm166.15 0v-40h80V-780h40v124.62h80v40H380ZM460-180v-324.62h40V-180h-40Zm246.15 0v-124.62h-80v-40h200v40h-80V-180h-40Zm0-275.38V-780h40v324.62h-40Z"/></svg>
                        </div>
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
                    {
                    transactions.map((transaction)=>(
                        <tr key={transaction.id} className='span divider'>
                            <td>{transaction.Date}</td>
                            <td>{transaction.Type}</td>
                            <td>{transaction.Account}</td>
                            <td>
                                <span className='sub mr-5'>$</span>
                                {transaction.Amount
                                ? CleanDigits(String(transaction.Amount.toFixed(2)).slice(0, 6)) + (transaction.Amount.toString().replace(".", "").length >= 6 ? "..." : "")
                                : ""}
                            </td>
                            <td>
                                <div className={transaction.Debit ? 'debit' : 'hidden'}>
                                <span className='sub mr-5'>$</span>
                                {transaction.Debit
                                ? CleanDigits(String(transaction.Debit.toFixed(2)).slice(0, 6)) + (transaction.Debit.toString().replace(".", "").length >= 6 ? "..." : "")
                                : ""}
                                </div>
                            </td>

                            <td>
                            <div className={transaction.Credit ? 'credit' : 'hidden'}>
                                <span className='sub mr-5'>$</span>
                                {transaction.Credit
                                ? CleanDigits(String(transaction.Credit.toFixed(2)).slice(0, 6)) + (transaction.Credit.toString().replace(".", "").length >= 6 ? "..." : "")
                                : ""}
                                </div>
                            </td>

                            <td>    
                                <span className='sub mr-5'>$</span>
                               {transaction.Balance
                                ? CleanDigits(String(transaction.Balance.toFixed(2)).slice(0, 6)) + (transaction.Balance.toString().replace(".", "").length >= 6 ? "..." : "")
                                : ""}
                            </td>
                        </tr>
                    ))
                    }   
                    </tbody> 
                </table>

                <div className='pages sub xs span'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M560-253.85 333.85-480 560-706.15 602.15-664l-184 184 184 184L560-253.85Z"/></svg>
                    <div>Pages <strong>1</strong> / 10</div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m517.85-480-184-184L376-706.15 602.15-480 376-253.85 333.85-296l184-184Z"/></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Transactions