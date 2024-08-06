import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ProductList = () => {
  return (
    <Container>
      <h1 className="my-4">Product List</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Price: ${product.price}</strong>
                </Card.Text>
                <Card.Text>
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </Card.Text>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
