
import styled from "styled-components";

export const ProfileSkills = styled.div`
padding: 50px 0;
overflow: hidden;
`
export const ProfileList = styled.ul`
list-style: none
`

export const Profile = styled.div`
width: 50%;
float: left;
`

export const ProfileItems = styled.li`
margin-bottom: 8px
`

export const SpanA = styled.span`
display: inline-block;
width: 100px;
font-weight: bold
`


export const Web = styled.span `
    font-weight: normal;
    color: #eb5424
`

export const SkillsSection = styled.div `
    width: 50%;
    float: left;
`

export const Desc = styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const Span = styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const Title = styled.span`
    float: left;
`

export const Perc = styled.span `
    float: right;
    margin-right: 100px
`

export const Parent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px ;
    width:100% ;
`

export const ParSpan = styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`

export const FSpan = styled.span `

display: block;
height: 100%;
width: ${props => {
    console.log('items:', props.items); // Debugging: log the 'items' prop value
    if (props.items === "1") {
      return "100%";
    } else if (props.items === "2") {
      return "90%";
    } else if (props.items === "3") {
      return "70%";
    } else {
      return "";
    }
  }};
background: black;
`



export const ProfileTitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileSpan = styled.span `
    font-weight: normal;
`