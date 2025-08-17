import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Heart } from 'react-bootstrap-icons';
import './BestSellers.css';

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Tailored Stretch",
      category: "New Arrival",
      price: "₹80",
      image: "/api/placeholder/300/300",
      alt: "Purple and green hair accessories with decorative elements"
    },
    {
      id: 2,
      name: "Pigtail Bows",
      category: "Bowa",
      price: "₹120",
      image: "/api/placeholder/300/300",
      alt: "Colorful floral pattern hair bows and accessories"
    },
    {
      id: 3,
      name: "Scrunchies Wood Stand",
      category: "Stand",
      price: "₹200",
      image: "/api/placeholder/300/300",
      alt: "Wooden stand displaying multiple colorful scrunchies"
    }
  ];

  return (
    <section className="best-sellers-section">
      <Container>
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <Button variant="outline-success" className="view-all-btn">
            View All
          </Button>
        </div>
        
        <Row className="products-row">
          {products.map((product) => (
            <Col lg={4} md={6} sm={12} key={product.id} className="mb-4">
              <Card className="product-card h-100">
                <div className="card-image-wrapper">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.alt}
                    className="product-image"
                  />
                  <Button 
                    variant="link" 
                    className="wishlist-btn"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="heart-icon" />
                  </Button>
                </div>
                
                <Card.Body className="product-info">
                  <div className="product-details">
                    <Card.Title className="product-name">
                      {product.name}
                    </Card.Title>
                    <Card.Text className="product-category">
                      {product.category}
                    </Card.Text>
                  </div>
                  <div className="product-price">
                    {product.price}
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