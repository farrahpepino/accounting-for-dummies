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
import TransactionEdit from './Pages/Main/TransactionEdit/TransactionEdit';
import Settings from './Pages/Main/Settings/Settings';
import Statements from './Pages/Main/Statements/Statements';

function App() {

  return (
   <Routes>
    <Route path="/login"        element={<Login />} />

    <Route element={<ProtectedRoutes />}>

      <Route path="/"        element={<Home />} />
      <Route path="/accounts"        element={<Accounts />} />
      <Route path="/transactions"        element={<Transactions />} />
      <Route path="/entry"        element={<Entry />} />

      <Route path='/add-account' element={<Account />}/>
      <Route path='/edit-account' element={<AccountEdit />} />
      <Route path='/edit-transaction' element={<TransactionEdit />}/>
      <Route path='/settings' element={<Settings />}/>
      <Route path='/statements' element={<Statements />}/>

    </Route>
   </Routes>
  )
}

export default App

// keep for later
// <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#938D8D"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>

