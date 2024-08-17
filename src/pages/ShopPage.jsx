import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumb, Row, Col, Card, Button, Select, InputNumber } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const ShopPage = () => {
  const { category, itemName } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        // Adjust the path based on your project structure
        const data = await import(`../data/${category}.json`); // Adjust this if necessary
        const selectedItem = data.default.find((i) => i.link.includes(itemName));
        setItem(selectedItem);
      } catch (error) {
        console.error('Error loading item data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItemData();
  }, [category, itemName]);

  if (loading) return <div>Loading...</div>;
  if (!item) return <div>Item not found</div>;

  return (
    <div className="shop-page container mx-auto p-4">
      {/* Breadcrumb */}
      <Breadcrumb className="my-4">
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/oils/${category}`}>{category.replace('-', ' ')}</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{itemName.replace('-', ' ')}</Breadcrumb.Item>
      </Breadcrumb>

      {/* Main Product Section */}
      <Row gutter={[16, 16]}>
        {/* Product Image */}
        <Col xs={24} sm={12} md={8}>
          <img src={item.image} alt={item.name} className="rounded shadow" />
        </Col>

        {/* Product Details */}
        <Col xs={24} sm={12} md={16}>
          <h2 className="text-3xl font-semibold">{item.name}</h2>
          <p className="text-gray-700 my-2">{item.sub}</p>
          <div className="text-2xl font-bold text-green-600 my-2">{item.price}</div>
          <div className="text-sm text-gray-600">Earn points upon purchase</div>

          {/* Size Selection */}
          {/* This assumes size information might be added later */}
          <div className="my-4">
            <Select
              placeholder="Select a size"
              className="w-full"
              size="large"
            >
              {/* Example sizes if applicable */}
              {/* <Option value="100ml">100ml</Option> */}
            </Select>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="my-4 flex space-x-2 items-center">
            <InputNumber min={1} defaultValue={1} className="w-20" size="large" />
            <Button type="primary" size="large">
              Add to Cart
            </Button>
          </div>

          {/* Wishlist */}
          <div className="my-2">
            <Button type="link" className="text-green-600">
              Add to wishlist
            </Button>
          </div>

          {/* SKU */}
          <div className="my-2 text-gray-500">SKU: {item.sku || 'Not available'}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ShopPage;
