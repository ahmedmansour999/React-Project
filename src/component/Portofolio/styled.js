import styled from "styled-components";


export const PortfolioSection = styled.div`
background: #f8f8f8;
padding-top: 20px; 
overflow: hidden;
`
export const Title = styled.h2`
text-align: center;
font-size: 35px `


export const Span = styled.span`
font-weight: normal ;
`

export const List = styled.ul`
list-style: none;
text-align: center;
margin: 20px 0 ;
`


export const Items = styled.li`
display: inline-block;
width: 100px;
padding: 10px ;
cursor : pointer ; 
background : ${props => props.active ? '#ff0000' : '' } ;
color : ${props => props.active ? '#fff' : '#000'} ;
`

export const ImageContainer = styled.div`
width: 25%;
float: left;
font-size: 0;
position: relative; 

&:hover > p {
    opacity : 1 ;
}
`

export const Image = styled.img`    
width: 100% ;

`

export const Overlay = styled.p`
position: absolute;
height: 50%;
top: 50%;
left: 0;
bottom: 0;
right: 0;
background: rgb(239 233 231 / 50%);
opacity: 0 ;
transition: 2s cubic-bezier(0.11, 0.27, 0.58, 1);
text-align : center ;

`

export const OverlaySpan = styled.span`
position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(255, 255, 255);
    display: block;
    /* padding: 10px 20px; */
    cursor: pointer;
    border: 2px solid rgb(235, 84, 36);
    width: 100%;
    margin: 10px;
    background: bottom;
    border: none;
    color: red;
    font-family: emoji;
    letter-spacing: 4px;
    font-size: 35px;
    font-weight: bold;
`




