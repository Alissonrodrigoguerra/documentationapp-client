import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../../../styles/globalStyles';
import  Styled  from 'styled-components'
import { Light, Dark } from '../../../../styles/theme'
import Navbar from 'react-bootstrap/Navbar'
import Container from  'react-bootstrap/Container'
import NavDropdown from  'react-bootstrap/NavDropdown'
import Nav from  'react-bootstrap/Nav'
import Button from  'react-bootstrap/Button'
import Form  from  'react-bootstrap/Form'
import FormControl from  'react-bootstrap/FormControl'


const ContainerNavbar = Styled.div`
  background: ${props => props.theme.backgroundNav};
  height: 100px;
  display: flex;
	justify-content: center;
  align-items: center;
  font-size: 12px;
  font-family: sans-serif;
  font-weight: 100;
`
export default function Home() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  
  return (
  <>
  <ThemeProvider theme={isDarkTheme ? Dark : Light}>
    <GlobalStyle />
        <Navbar expand="lg">
            <Container fluid>
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
           
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll  >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>  
            <button className="accent fixed-top"  onClick={() => setIsDarkTheme(!isDarkTheme)}>  Trocar Tema </button>
 
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </ThemeProvider>
  </>
  );
}
