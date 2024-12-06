import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function BurgerMenu() {
  return (
    <Navbar expand="lg" className="bg-orange-500 text-sky-950 flex-row p-0">
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="p-0 border-transparent text-xs"
        />
        <Navbar.Brand
          href="#home"
          className="flex flex-row items-center justify-around py-3 "
        >
          <div id="Title" className="flex flex-row items-center text-sky-950">
            <img src={'../assets/logo__small.png'} alt="logo" />
            <p className="archivo-black text-xs text-sky-950">
              GenericMarketplace
            </p>
          </div>
        </Navbar.Brand>
        <div
          id="UserMenu"
          className="flex flex-row material-symbols-outlined text-3xl no-underline"
        >
          <Button variant="link" className="p-0 no-underline">
            <span className="text-sky-950 text-xl no-underline mx-0.5">
              chat_bubble
            </span>
          </Button>
          <Button variant="link" className="p-0 no-underline">
            <span className="text-sky-950 text-xl no-underline mx-0.5">
              person
            </span>
          </Button>
          <Button variant="link" className="p-0 no-underline">
            <span className="text-sky-950 text-xl no-underline mx-0.5">
              shopping_cart
            </span>
          </Button>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
            <Nav.Link href="#link">Hot deals</Nav.Link>
            <Nav.Link href="#link">New Products</Nav.Link>
            <Nav.Link href="#link">Second hand</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BurgerMenu
