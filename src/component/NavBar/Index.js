import React from "react";
import { Link } from "react-router-dom";
import "./style.js" ;
import { Items, LogoText, NavbarSection  ,Links, List ,StyledLink ,Container } from "./style.js";



function NavBar() {
    return (
      <NavbarSection>
        <Container >
                
                <logo>
                    <LogoText>Ultra Profile</LogoText>
                </logo>
                
                
                <List>
                    <Items><StyledLink to='/Index'>Home</StyledLink></Items>
                  
                    <Items><Links to='#'>Work</Links></Items>
                    <Items><Links to='#'>Portfolio</Links></Items>
                    <Items><Links to='#'>Resume</Links></Items>
                    <Items><Links to='#'>About</Links></Items>
                    <Items><StyledLink to='/contact'>Contact</StyledLink></Items>
                </List>
                
            </Container>
      </NavbarSection>
    );
  }
  
export default NavBar ;   
