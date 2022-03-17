import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${props => props.theme.backgroundBody};
    color: ${props => props.theme.primary300};        
  }

  .ContainerNavbar{
    background: ${props => props.theme.backgroundNav};
    color: ${props => props.theme.white};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: sans-serif;
    font-weight: 100;
  }
  

 .Navbar{
  background:  ${props => props.theme.backgroundBody}
 }



`;
 
export default GlobalStyle;