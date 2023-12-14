import { Container, Row, Col, InputGroup, Form, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import logo from "../../public/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMessage, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";
import { useState } from 'react';
export default function SiteNav() {

    const { t } = useTranslation()

    let [searchValue, setSearchValue] = useState("")


    return (
        <nav>
            <Container>
                <Row>
                    <Col md={2} className='text-center'>
                        <img src={logo} width={100} alt="Site logo" />
                    </Col>
                    <Col className="pt-2" md="7">
                        <InputGroup className="mb-3">
                            <Form.Control
                                aria-label="Text input with dropdown button"
                                onChange={(ev) => setSearchValue(ev.target.value)} />
                            <DropdownButton
                                variant="outline-secondary"
                                title="Dropdown"
                                id="input-group-dropdown-2"
                                align="end"
                            >
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                            <Button variant="primary">Search</Button>
                        </InputGroup>
                    </Col>
                    <Col md={3} className="mt-2 d-flex justify-content-between">
                        <div className="nav_item d-flex justify-content-center flex-column text-center">
                            <FontAwesomeIcon icon={faUser} />
                            <div>{t('profile')}</div>
                        </div>
                        <div className="nav_item d-flex justify-content-center flex-column text-center">
                            <FontAwesomeIcon icon={faMessage} />
                            <div>{t('messages')}</div>
                        </div>
                        <div className="nav_item d-flex justify-content-center flex-column text-center">
                            <FontAwesomeIcon icon={faHeart} />
                            <div>{t('order')}</div>
                        </div>
                        <div className="nav_item d-flex justify-content-center flex-column text-center">
                            <FontAwesomeIcon icon={faCartShopping} />
                            <div>Cart</div>
                        </div>
                    </Col>
                </Row>
            </Container >
        </nav>
    )
}
