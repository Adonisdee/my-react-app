import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Input, Select } from 'antd';
import Home from './Home';
import Header from './components/Header';
import SubNav from './components/SubNav';
import Receipt from './Receipt';
import Cart from './Cart';
import CarrierOilsProduct from './pages/CarrierOilsProduct';
import ShopPage from './pages/ShopPage';
import './index.css'; 
import EssentialOilsProduct from './pages/EssentialOilsProduct';


const { Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header />

        {/* Sub-navbar */}
        <SubNav />

        <Content className="p-0 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/oils/carrier-oils/" element={<CarrierOilsProduct />} />
            <Route path="/oils/essential-oils/" element={<EssentialOilsProduct />} />
            <Route path="/shop/:category/:itemName" element={<ShopPage />} />

          </Routes>
        </Content>

        <Footer className='py-2' style={{ textAlign: 'center' }}>©2024 Your Company Name. All rights reserved.</Footer>
      </Layout>
    </Router>
  );
}

export default App;
