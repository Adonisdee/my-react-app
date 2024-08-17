// src/pages/Home.jsx

import React from 'react';
import { Carousel, Row, Col, Card } from 'antd';

const { Meta } = Card;

import raw1 from './assets/raw1.jpg'; // Adjust path as necessary
import raw2 from './assets/raw2.jpg'; // Adjust path as necessary
import raw3 from './assets/raw3.jpg'; // Adjust path as necessary
import raw7 from './assets/raw7.jpg'; // Adjust path as necessary

const carouselItems = [
  {
    image: raw1, // Skincare raw materials
    caption: 'High-Quality Raw Materials',
  },
  {
    image: raw2, // Natural extracts
    caption: 'Pure and Natural Extracts',
  },
  {
    image: raw3, // Beautiful skin
    caption: 'Achieve Beautiful and Healthy Skin',
  },
];

const productItems = [
  {
    image: raw7, // Vitamin C Serum
    title: 'Vitamin C Serum',
    description: 'Brightens and evens skin tone.',
  },
  {
    image: 'https://images.pexels.com/photos/4346457/pexels-photo-4346457.jpeg', // Hyaluronic Acid
    title: 'Hyaluronic Acid',
    description: 'Provides deep hydration.',
  },
  {
    image: 'https://images.pexels.com/photos/3765398/pexels-photo-3765398.jpeg', // Retinol
    title: 'Retinol',
    description: 'Reduces the appearance of wrinkles.',
  },
];

function Home() {
  return (
    <div className="bg-gray-100">
      <Carousel autoplay>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.image} alt={item.caption} className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white text-center">
              <h2 className="text-xl">{item.caption}</h2>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <Row gutter={[16, 16]}>
          {productItems.map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                hoverable
                cover={
                  <div className="relative overflow-hidden">
                    <img alt={item.title} src={item.image} className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                }
                className="shadow-lg"
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg mb-4">
            We provide high-quality, natural skincare raw materials and actives that help you achieve beautiful, healthy skin.
          </p>
          <p className="text-lg">
            Our products are carefully sourced and tested to ensure they meet the highest standards of quality and safety.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
