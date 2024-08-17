import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Input, Select } from 'antd';
import logo from '../assets/logo2.jpeg';

const { Header } = Layout;
const { Search } = Input;


function App() {
  return (
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
  );
};

export default App;
