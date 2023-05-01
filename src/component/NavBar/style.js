import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarSection = styled.div`
  padding: 20px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;
`;
export const Container = styled.div`
  width: 85% ;
  margin: auto;
  
  display: flex;
  align-items: center;
  justify-content: space-evenly
`

export const Logo = styled.div`
  width: 50%;
  float: left;
  display: flex;
  align-items: center;
`;

export const LogoText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  font-style: initial;
    font-family: ui-monospace;
    letter-spacing: 3px;
    text-shadow: 2px 2px 3px rgb(136 136 136 / 64%);
`;

export const List = styled.ul`
  width: 50%;
  float: left;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Items = styled.li`
  display: inline-block;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Links = styled.a`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #eb5424;
  }
`;
export const StyledLink = styled(Link)`
  display: block;
  color: #222;
  text-decoration: none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover {
    color: #eb5424;
  }
`;

