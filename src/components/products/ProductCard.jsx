import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function ProductCard({ product }) {
    return (
        <Col sm={12} md={4} className="p-3">
            <Card className="h-100">
                {/* <Card.Img variant="top" src={product.image} /> */}
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/products/${product.id}`} className='btn btn-primary'>Go somewhere</Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}
