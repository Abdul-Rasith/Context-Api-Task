import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { products } from "../data/products";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart, updateQuantity } = useContext(CartContext);
  const product = products.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={product.image} />
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>Price: ${product.price}</strong>
              </Card.Text>
              <Card.Text>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </Card.Text>
              <Form>
                <Form.Group controlId="quantity">
                  <Form.Label>Quantity</Form.Label>
                  <Row>
                    <Col xs={2}>
                      <Button
                        onClick={() => setQuantity(quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                    </Col>
                    <Col xs={4}>
                      <Form.Control
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                    </Col>
                    <Col xs={2}>
                      <Button onClick={() => setQuantity(quantity + 1)}>
                        +
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={handleAddToCart}
                  className="mt-3"
                >
                  Add to Cart
                </Button>
              </Form>
              <Card.Text className="mt-3">Total Quantity: {quantity}</Card.Text>
              <Card.Text>Total Amount: ${product.price * quantity}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
