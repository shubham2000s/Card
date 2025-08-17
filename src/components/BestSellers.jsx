import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './BestSellers.css';

const defaultItems = [
	{
		id: 'tailored-stretch',
		title: 'Tailored Stretch',
		subtitle: 'New Arrival',
		price: 80,
		currency: '₹',
		imageUrl: 'https://via.placeholder.com/800x600?text=Tailored+Stretch',
	},
	{
		id: 'pigtail-bows',
		title: 'Pigtail Bows',
		subtitle: 'Bowa',
		price: 120,
		currency: '₹',
		imageUrl: 'https://via.placeholder.com/800x600?text=Pigtail+Bows',
	},
	{
		id: 'scrunchies-wood-stand',
		title: 'Scrunchies Wood Stand',
		subtitle: 'Stand',
		price: 200,
		currency: '₹',
		imageUrl: 'https://via.placeholder.com/800x600?text=Scrunchies+Wood+Stand',
	},
];

function formatPrice(currencySymbol, numericPrice) {
	return `${currencySymbol}${numericPrice}`;
}

export default function BestSellers({ items = defaultItems, onViewAll }) {
	return (
		<section className="best-sellers">
			<Container>
				<div className="section-header">
					<h2 className="section-title">Best Sellers</h2>
					<Button
						variant="dark"
						size="sm"
						className="view-all-btn"
						onClick={onViewAll}
					>
						View All
					</Button>
				</div>

				<Row className="g-4">
					{items.map((product) => (
						<Col key={product.id} xs={12} sm={6} md={4}>
							<Card className="product-card h-100">
								<div className="image-wrapper">
									<Card.Img
										variant="top"
										src={product.imageUrl}
										alt={product.title}
										className="product-image"
									/>
									<button type="button" className="wishlist-btn" aria-label="Add to wishlist">
										<i className="bi bi-heart" />
									</button>
								</div>

								<Card.Body>
									<div className="product-meta">
										<h3 className="product-title">{product.title}</h3>
										<div className="product-price">
											{formatPrice(product.currency, product.price)}
										</div>
									</div>
									<p className="product-subtitle">{product.subtitle}</p>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
}

BestSellers.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			subtitle: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			currency: PropTypes.string,
			imageUrl: PropTypes.string.isRequired,
		})
	),
	onViewAll: PropTypes.func,
};