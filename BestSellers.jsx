import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import './BestSellers.css';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      title: "Tailored Stretch",
      subtitle: "New Arrival",
      price: "₹80",
      image: "/images/tailored-stretch.jpg", // Replace with actual image path
      isNew: true
    },
    {
      id: 2,
      title: "Pigtail Bows",
      subtitle: "Bowa",
      price: "₹120",
      image: "/images/pigtail-bows.jpg", // Replace with actual image path
      isNew: false
    },
    {
      id: 3,
      title: "Scrunchies Wood Stand",
      subtitle: "Stand",
      price: "₹200",
      image: "/images/scrunchies-wood-stand.jpg", // Replace with actual image path
      isNew: false
    }
  ];

  const handleViewAll = () => {
    // Handle view all functionality
    console.log('View all clicked');
  };

  const handleHeartClick = (productId) => {
    // Handle heart/like functionality
    console.log('Heart clicked for product:', productId);
  };

  return (
    <section className="best-sellers-section">
      <Container>
        {/* Section Header */}
        <Row className="section-header">
          <Col>
            <h2 className="section-title">Best Sellers</h2>
          </Col>
          <Col xs="auto">
            <Button 
              variant="success" 
              className="view-all-btn"
              onClick={handleViewAll}
            >
              View All
            </Button>
          </Col>
        </Row>

        {/* Product Cards */}
        <Row className="product-cards-row">
          {products.map((product) => (
            <Col key={product.id} lg={4} md={6} className="product-col">
              <Card className="product-card">
                <div className="product-image-container">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.title}
                    className="product-image"
                  />
                  <button 
                    className="heart-button"
                    onClick={() => handleHeartClick(product.id)}
                    aria-label="Add to favorites"
                  >
                    <Heart className="heart-icon" />
                  </button>
                  {product.isNew && (
                    <span className="new-badge">New</span>
                  )}
                </div>
                <Card.Body className="product-card-body">
                  <Card.Title className="product-title">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="product-subtitle">
                    {product.subtitle}
                  </Card.Text>
                  <div className="price-container">
                    <span className="product-price">{product.price}</span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BestSellers;