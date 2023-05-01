import styled from "styled-components"; 



export const SocialMedia = styled.div`
height: auto;
overflow: hidden
`

export const SocialSection = styled.div`
  width: 33.33%;
  float: left;
  box-sizing: border-box;
  padding: 100px 0 100px 60px;

  background: ${(props) => {
    if (props.item === 1) {
      return "#3b5998";
    } else if (props.item === 2) {
      return "#498cbf";
    } else if (props.item === 3) {
      return "#cc2127";
    }
  }};
`;






export const Icon = styled.i `
width: 50px;
height: 50px;
background: #fff;
text-align: center;
line-height: 50px;
color: #888;
float: left;
margin-right: 10px
`

export const Para = styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff
`
export const SocialSpan = styled.span`
display: block;
margin-bottom: 8px
`


export const Info2 = styled(SocialSpan) `
    font-weight: normal
`

