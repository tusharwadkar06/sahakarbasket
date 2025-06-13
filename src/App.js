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
import Profile from './pages/Profile';
import Transaction from './pages/Transaction';
import ProductStock from './pages/Productstock';
import Buyerlist from './pages/Buyerlist';
import OrderList from './pages/OrderList';
import Demo from './pages/Demo';

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
        <Route path="/merchant" element={<Layout><Merchant /></Layout>} />   
        <Route path="/addnewmercant" element={<Layout><AddNewMerchant/></Layout>}/>

     <Route path="/profile" element={<Layout><Profile/></Layout>}/>
     
     <Route path="Transaction" element={<Layout><Transaction/></Layout>}/>
      <Route path="demo" element={<Demo/>}/>
     <Route path="productstock" element={<Layout><ProductStock/></Layout>}/>
         <Route path="buyerlist" element={<Layout><Buyerlist/></Layout>}/>
         <Route path="orderlist" element={<Layout><OrderList/></Layout>}/>
         <Route path="demo" element={<Demo/>}/>
       
        
      


      </Routes>
    </Router>
  );
}

export default App;
