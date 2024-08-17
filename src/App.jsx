import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Input, Select } from 'antd';
import Home from './Home';
import Receipt from './Receipt';
import Cart from './Cart';
import CarrierOilsProduct from './CarrierOilsProduct';
import './index.css'; 
import logo from './assets/logo2.jpeg';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const { Option } = Select;

function App() {
  return (
    <Router>
      <Layout className="min-h-screen">
        <Header className="bg-white shadow-md sticky top-0 z-50 flex items-center justify-between">
          <div className="logo">
            <img src={logo} alt="Logo" style={{ width: '100px', height: '60px' }} />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 border rounded-md p-2 shadow-sm">
              <Select placeholder="All Categories" style={{ width: 200 }} bordered={false}>
                {/* Add your options here */}
                <Option value="carrier-oils">Carrier Oils</Option>
                <Option value="essential-oils">Essential Oils</Option>
                <Option value="raw-whitening-oils">Raw Whitening Oils</Option>
                <Option value="natural-fragrance">Natural Fragrance</Option>
                <Option value="synthetic-fragrance">Synthetic Fragrance</Option>
                <Option value="butters">Butters</Option>
                <Option value="extracts">Extracts</Option>
                <Option value="fruit-powders">Fruit Powders</Option>
                <Option value="lightening-powders">Lightening Powders</Option>
                <Option value="herbal-powders">Herbal Powders</Option>
                <Option value="emulsifier-thickeners">Emulsifier & Thickeners</Option>
                <Option value="raw-materials">Raw Materials</Option>
                <Option value="surfactants-humectants">Surfactants & Humectants</Option>
                <Option value="cream-base">Cream Base</Option>
                <Option value="melt-pour-soap-base">Melt & Pour Soap Base</Option>
                <Option value="activators">Activators</Option>
                <Option value="concentrates">Concentrates</Option>
                <Option value="serums">Serums</Option>
                <Option value="oils">Oils</Option>
                <Option value="lotions">Lotions</Option>
                <Option value="toners">Toners</Option>
                <Option value="cleansers">Cleansers</Option>
                <Option value="hydrosols">Hydrosols</Option>
                <Option value="gels">Gels</Option>
                <Option value="body-oils">Body Oils</Option>
              </Select>
              <div className="border-l h-6 mx-2"></div>
              <Search
                placeholder="Search Product"
                onSearch={value => console.log(value)}
                style={{ width: 200 }}
                bordered={false}
              />
            </div>
          </div>
          <Menu mode="horizontal" className="flex-grow justify-end">
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/receipt">Receipt</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/cart">Cart</Link>
            </Menu.Item>
          </Menu>
        </Header>

        {/* Sub-navbar */}
        <Menu mode="horizontal" className="bg-gray-100 shadow-md sticky top-0 z-40 flex items-center justify-center">
          <SubMenu key="about-us" title="About Us" />
          <SubMenu key="oils" title="Oils">
            <Menu.Item key="carrier-oils">
              <Link to="/oils/carrier-oils">Carrier Oils</Link>
            </Menu.Item>
            <Menu.Item key="argan-oil">
              <Link to="/oils/carrier-oils/argan-oil">Argan Oil</Link>
            </Menu.Item>
            <Menu.Item key="essential-oils">
              <Link to="/oils/essential-oils">Essential Oils</Link>
            </Menu.Item>
            <Menu.Item key="raw-whitening-oils">
              <Link to="/oils/raw-whitening-oils">Raw Whitening Oils</Link>
            </Menu.Item>
            <SubMenu key="fragrance-oils" title="Fragrance Oils">
              <Menu.Item key="natural-fragrance">
                <Link to="/oils/fragrance-oils/natural-fragrance">Natural Fragrance</Link>
              </Menu.Item>
              <Menu.Item key="synthetic-fragrance">
                <Link to="/oils/fragrance-oils/synthetic-fragrance">Synthetic Fragrance</Link>
              </Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="butters-extracts" title="Butters & Extracts">
            <Menu.Item key="butters">
              <Link to="/butters-extracts/butters">Butters</Link>
            </Menu.Item>
            <Menu.Item key="extracts">
              <Link to="/butters-extracts/extracts">Extracts</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="powders" title="Powders">
            <Menu.Item key="fruit-powders">
              <Link to="/powders/fruit-powders">Fruit Powders</Link>
            </Menu.Item>
            <Menu.Item key="lightening-powders">
              <Link to="/powders/lightening-powders">Lightening Powders</Link>
            </Menu.Item>
            <Menu.Item key="herbal-powders">
              <Link to="/powders/herbal-powders">Herbal Powders</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="active-ingredients" title="Active Ingredients">
            <Menu.Item key="emulsifier-thickeners">
              <Link to="/active-ingredients/emulsifier-thickeners">Emulsifier & Thickeners</Link>
            </Menu.Item>
            <Menu.Item key="raw-materials">
              <Link to="/active-ingredients/raw-materials">Raw Materials</Link>
            </Menu.Item>
            <Menu.Item key="surfactants-humectants">
              <Link to="/active-ingredients/surfactants-humectants">Surfactants & Humectants</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="soaps-creams" title="Soaps & Creams">
            <Menu.Item key="cream-base">
              <Link to="/soaps-creams/cream-base">Cream Base</Link>
            </Menu.Item>
            <Menu.Item key="melt-pour-soap-base">
              <Link to="/soaps-creams/melt-pour-soap-base">Melt & Pour Soap Base</Link>
            </Menu.Item>
            <Menu.Item key="activators">
              <Link to="/soaps-creams/activators">Activators</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="promixing" title="Promixing">
            <Menu.Item key="concentrates">
              <Link to="/promixing/concentrates">Concentrates</Link>
            </Menu.Item>
            <Menu.Item key="serums">
              <Link to="/promixing/serums">Serums</Link>
            </Menu.Item>
            <Menu.Item key="oils">
              <Link to="/promixing/oils">Oils</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="body-care" title="Body Care">
            <Menu.Item key="lotions">
              <Link to="/body-care/lotions">Lotions</Link>
            </Menu.Item>
            <Menu.Item key="toners">
              <Link to="/body-care/toners">Toners</Link>
            </Menu.Item>
            <Menu.Item key="cleansers">
              <Link to="/body-care/cleansers">Cleansers</Link>
            </Menu.Item>
            <Menu.Item key="hydrosols">
              <Link to="/body-care/hydrosols">Hydrosols</Link>
            </Menu.Item>
            <Menu.Item key="gels">
              <Link to="/body-care/gels">Gels</Link>
            </Menu.Item>
            <Menu.Item key="body-oils">
              <Link to="/body-care/body-oils">Body Oils</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>

        <Content className="p-6 bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/receipt" element={<Receipt />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/oils/carrier-oils/Argan-Oil" element={<CarrierOilsProduct />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>©2024 Your Company Name. All rights reserved.</Footer>
      </Layout>
    </Router>
  );
}

export default App;
