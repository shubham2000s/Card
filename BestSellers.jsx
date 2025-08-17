import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import './BestSellers.css';

const BestSellers = ({ items }) => {
  // Fallback sample data if no items prop is passed
  const fallbackItems = [
    {
      id: 1,
      title: 'Tailored Stretch',
      subtitle: 'New Arrival',
      price: 80,
      image:
        'https://images.unsplash.com/photo-1623057203499-ff9aa47062cb?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      title: 'Pigtail Bows',
      subtitle: 'Bowa',
      price: 120,
      image:
        'https://images.unsplash.com/photo-1585314062343-bd9adafc68e6?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 3,
      title: 'Scrunchies Wood Stand',
      subtitle: 'Stand',
      price: 200,
      image:
        'https://images.unsplash.com/photo-1608474503304-48f7b5a109f9?auto=format&fit=crop&w=700&q=80',
    },
  ];

  const products = items && items.length ? items : fallbackItems;

  return (
    <Container fluid className="best-sellers-section py-5 px-lg-5">
      {/* Header */}
      <Row className="align-items-center mb-4">
        <Col>
          <h2 className="section-title m-0">Best Sellers</h2>
        </Col>
        <Col xs="auto">
          <Button variant="outline-success" className="view-all-btn">
            View All
          </Button>
        </Col>
      </Row>

      {/* Cards */}
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} md={4}>
            <Card className="product-card border-0 h-100">
              <div className="image-wrapper">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
                <Button
                  variant="light"
                  className="wishlist-btn shadow-sm p-2 d-flex align-items-center justify-content-center"
                >
                  <AiOutlineHeart className="wishlist-icon" />
                </Button>
              </div>
              <Card.Body className="px-0">
                <Card.Title className="product-title mb-1">
                  {product.title}
                </Card.Title>
                <Card.Text className="product-subtitle text-muted small mb-2">
                  {product.subtitle}
                </Card.Text>
                <Card.Text className="product-price fw-bold mb-0">
                  ₹{product.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellers;