import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, } from 'antd';

const { SubMenu } = Menu;


function App() {
  return (
    <Menu mode="horizontal" className="bg-gray-100 shadow-md sticky top-0 z-40 flex items-center justify-center">
      <SubMenu key="about-us" title="About Us" />
      <SubMenu key="oils" title="Oils">
        <Menu.Item key="carrier-oils">
          <Link to="/oils/carrier-oils">Carrier Oils</Link>
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
  );
};

export default App;
