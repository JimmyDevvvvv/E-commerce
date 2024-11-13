import { Container, Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Col xs="auto">
                    <h1 className="text-center">Welcome to the E-Shop</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeScreen;
