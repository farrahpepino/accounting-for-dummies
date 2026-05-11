import './App.css';

import ProtectedRoutes from './Utils/ProtectedRoutes';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Main/Home/Home';
import Accounts from './Pages/Main/Accounts/Accounts';
import Transactions from './Pages/Main/Transactions/Transactions';
import Entry from './Pages/Main/Entry/Entry';
import Login from './Pages/Auth/Login/Login';

import Account from './Pages/Main/AccountAdd/Account';
import AccountEdit from './Pages/Main/AccountEdit/AccountEdit';
import TransactionDetails from './Pages/Main/TransactionDetails/TransactionDetails';
import Settings from './Pages/Main/Settings/Settings';
import Statements from './Pages/Main/Statements/Statements';

function App() {

  return (
   <Routes>
    <Route path="/login"        element={<Login />} />

    <Route element={<ProtectedRoutes />}>

      <Route path="/" element={<Home />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/entry"        element={<Entry />} />

      <Route path='/add-account' element={<Account />}/>
      <Route path='/edit-account' element={<AccountEdit />} />
      <Route path='/transaction' element={<TransactionDetails />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/statements' element={<Statements />}/>

    </Route>
   </Routes>
  )
}

export default App