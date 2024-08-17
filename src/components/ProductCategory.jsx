import React, { useState } from 'react';
import { Layout, Breadcrumb, Card, Row, Col, Button, Pagination, Select } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import bkimg from '../assets/environmentally-friendly-cosmetics-and-skincare.jpg';

const { Meta } = Card;
const { Option } = Select;

function App({ title, items = [], }) {
  const location = useLocation();
  const [filteredItems, setFilteredItems] = useState(items);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{snippet.charAt(0).toUpperCase() + snippet.slice(1)}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <div className="flex flex-col items-center space-x-4">
      {/* Title with background image */}
      <div
        className="flex items-center space-x-2 border rounded-md p-2 shadow-sm w-full h-40 bg-cover bg-left-top"
        style={{ backgroundImage: `url(${bkimg})` }}
      >
        <h1 className="w-full text-center font-normal text-gray-800 text-4xl">
          {title}
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="flex self-start text-left my-4">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          {breadcrumbItems}
        </Breadcrumb>
      </div>

      {/* Filter/Sort */}

      {/* Shop content */}
      <Row gutter={[16, 16]} className="w-full px-8 p-4">
        {paginatedItems.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.name}
                  src={item.image}
                  className="h-36 object-cover rounded-t-md"
                />
              }
              actions={[
                <Link to={item.link}>
                  <Button type="default">Select options</Button>
                </Link>,
              ]}
              className="rounded-md overflow-hidden shadow-md"
              bodyStyle={{ padding: '16px' }}
            >
              <Meta
                title={
                  <Link to={item.link} className="text-lg font-medium text-gray-900">
                    {item.name}
                  </Link>
                }
                description={
                  <>
                    <div className="text-base text-gray-600">{item.sub}</div>
                    <div className="text-base font-semibold text-gray-700">
                      {item.price}
                    </div>
                  </>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={filteredItems.length}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default App;
