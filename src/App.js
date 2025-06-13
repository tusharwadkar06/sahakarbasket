import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MerchantList from './pages/MerchantList';
import MerchantInfo from './pages/MerchantInfo';
import Products from './pages/Products';
import AddNewProduct from './pages/AddNewProduct';
import Login from './pages/Login';
import Cluster from './pages/Cluster';
import PlatformDashboard from './pages/PlatformDashboard';        
import AddNewSocietyUser from './pages/AddNewSocietyUser';
import SocietyUser from './pages/SocietyUser';
import Society from './pages/Society';
import AddNewSociety from './pages/AddNewSociety';
import TanentDashboard from './pages/TanentDashboard';
import Merchant from './pages/Merchant';
import AddNewMerchant from './pages/AddNewMerchant';
import AddNewTanent from './pages/AddNewTanent';
import Profile from './pages/Profile';
import MerchantDashboard from './pages/MerchantDashboard'
import Splash from './pages/Splash';
import CreditSociety from './pages/CreditSociety';
import Transaction from './pages/Transaction';
import OrderDetails from './pages/OrderDetails';
import Test from './pages/Test';
import ViewProduct from './pages/ViewProduct';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />   
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />  
        <Route path="/merchant-list" element={<Layout><MerchantList /></Layout>} />   
        <Route path="/merchantInfo" element={<Layout><MerchantInfo/></Layout>} />     
        <Route path="/products" element={<Layout><Products /></Layout>} />   
        <Route path="/add-product" element={<Layout><AddNewProduct /></Layout>} />  
        <Route path="/login" element={<Login />} />                                 
        <Route path="/clusters" element={<Layout><Cluster/></Layout>} />  
        <Route path="/platform-dashboard" element={<Layout><PlatformDashboard/></Layout>} /> 
        <Route path="/societyUser" element={<Layout><SocietyUser /></Layout>} />          
        <Route path="/addnewsocietyuser" element={<Layout><AddNewSocietyUser /></Layout>} />  
        <Route path="/society" element={<Layout><Society /></Layout>} />
        <Route path="/addnewsociety" element={<Layout><AddNewSociety /></Layout>} />
        <Route path="/tanentdashboard" element={<Layout><TanentDashboard /></Layout>} />
        <Route path="/merchant" element={<Layout><Merchant /></Layout>} />   //sidebartopbar to be change
        <Route path="/addnewmerchant" element={<Layout><AddNewMerchant/></Layout>}/>
        <Route path="/addnewtanent" element={<Layout><AddNewTanent/></Layout>}/>
        <Route path="/profile"element ={<Layout><Profile/></Layout>} />
        <Route path="/merchantDashboard" element={<Layout><MerchantDashboard/></Layout>} />
        //<Route path="/splash" element={<Layout><Splash/></Layout>} />
        <Route path="/creditsociety" element={<Layout><CreditSociety/></Layout>} />
        <Route path="/transaction" element={<Layout><Transaction/></Layout>} />
        <Route path="/orderdetails" element={<Layout><OrderDetails/></Layout>} />
        <Route path="/test" element={<Layout><Test/></Layout>} />
        <Route path="/viewproduct" element={<Layout><ViewProduct/></Layout>} />

  

      </Routes>
    </Router>
  );
}

export default App;
