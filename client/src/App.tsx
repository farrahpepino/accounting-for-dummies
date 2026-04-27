import './App.css';
import ProtectedRoutes from './Utils/ProtectedRoutes';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Main/Home/Home';
import Accounts from './Pages/Main/Accounts/Accounts';
import Transactions from './Pages/Main/Transactions/Transactions';
import Entry from './Pages/Main/Entry/Entry';
import Login from './Pages/Auth/Login/Login';

function App() {

  return (
   <Routes>
    <Route path="/login"        element={<Login />} />

    <Route element={<ProtectedRoutes />}>
      <Route path="/"        element={<Home />} />
      <Route path="/accounts"        element={<Accounts />} />
      <Route path="/transactions"        element={<Transactions />} />
      <Route path="/entry"        element={<Entry />} />
    </Route>
    
   </Routes>
  )
}

export default App
