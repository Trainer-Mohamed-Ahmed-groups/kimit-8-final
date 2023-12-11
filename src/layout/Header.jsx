import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from "react-i18next";



export default function Header() {
    const { t, i18n } = useTranslation()

    let handleLanguage = () => {
        i18n.language === 'en' ? i18n.changeLanguage('ar') : i18n.changeLanguage('en')
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <NavLink className='nav-link' to="/">{t('home')}</NavLink>
                        <NavLink className='nav-link' to="/about">about</NavLink>
                        <NavLink className='nav-link' to="/contact">contact</NavLink>
                        <NavLink className='nav-link' to="/products">products</NavLink>
                    </Nav>
                    <FontAwesomeIcon icon={faLanguage} onClick={handleLanguage} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
