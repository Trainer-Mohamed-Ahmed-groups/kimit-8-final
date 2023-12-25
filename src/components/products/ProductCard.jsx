/* eslint-disable react/prop-types */
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../helpers/fetch';
import { getProducts } from '../../helpers/fetch';
import Swal from 'sweetalert2'
import 'animate.css';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
export default function ProductCard({ product, setProducts }) {

    let { t } = useTranslation()

    let handleDelete = () => {
        Swal.fire({
            title: t('delete_message'),
            text: product.title,
            showCancelButton: true,
            confirmButtonText: "Save",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                deleteProduct(product.id)
                getProducts(setProducts)
                Swal.fire(t('successfully_deleted'));
            }
        });
    }

    return (
        <Col sm={12} md={4} className="p-3">
            <Card className="h-100">
                {/* <Card.Img variant="top" src={product.image} /> */}
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex flex-wrap gap-2 justify-content-center flex-column">
                    <Link to={`/products/${product.id}`} className='btn btn-primary w-75 mx-auto'>View details</Link>
                    <Link to={`/edit/${product.id}`} className='btn btn-warning w-75 mx-auto'>Edit</Link>
                    <Button variant="danger" className="w-75 mx-auto" onClick={handleDelete}>Delete</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}
