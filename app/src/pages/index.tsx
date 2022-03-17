import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import  Styled  from 'styled-components'
import GlobalStyle from '../styles/globalStyles';
import { Light, Dark } from '../styles/theme'

import Row from 'react-bootstrap/Row'
import Container from  'react-bootstrap/Container'

import Header from './Components/Layout/Header/index'


export default function Home() {

  const [isDarkTheme, setIsDarkTheme] = useState(false)
  
  return (
  <>
  <ThemeProvider theme={isDarkTheme ? Dark : Light}>
    <Container fluid  className={'page'}>
    <GlobalStyle />
    <Row  className="text-center " >
        <div className="ContainerNavbar">
        <Container>
             <Header />
        </Container>          
        </div>
    </Row>

    </Container>
    </ThemeProvider>
  </>
  );
}

