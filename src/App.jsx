// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Home from './Home';
// import About from './pages/About';
import Receipt from './Receipt';
import './index.css'; // Ensure Tailwind CSS is imported
import logo from './assets/logo2.jpeg'; // Adjust the path as necessary

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header className="bg-white shadow-md sticky top-0 z-50 flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '60px' }} />
          </div>
          <Menu mode="horizontal" className="flex-grow justify-end">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/receipt">Receipt</Link>
            </Menu.Item>
            {/* <Menu.Item key="3">
              <Link to="/contact">Contact</Link>
            </Menu.Item> */}
          </Menu>
        </Header>
        <Content className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </Content>
        <Footer className="bg-gray-800 text-white text-center py-4">
          © 2024 Your Company. All rights reserved.
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
