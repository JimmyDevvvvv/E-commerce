import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, selectLoading, selectError } from '../slices/productSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProducts()); // Fetch products on component mount
    }, [dispatch]);

    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Col xs="auto">
                    <h1 className="text-center">Welcome to the E-Shop</h1>

                    {/* Show loading spinner if fetching */}
                    {loading && <Spinner animation="border" />}

                    {/* Show error if there is one */}
                    {error && (
                        <Alert variant="danger">
                            <strong>Error:</strong> {error}
                        </Alert>
                    )}

                    {/* Show products if available */}
                    {products && products.length > 0 && (
                        <Row>
                            {products.map((product) => (
                                <Col key={product._id} md={4} className="my-3">
                                    <div className="product">
                                        <h5>{product.name}</h5>
                                        <p>{product.description}</p>
                                        <strong>${product.price}</strong>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default HomeScreen;
