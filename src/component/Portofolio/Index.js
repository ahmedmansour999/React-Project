import React , {useState , useEffect} from "react"
import { Items, Overlay, OverlaySpan, PortfolioSection, Title ,Span ,ImageContainer ,Image ,List } from "./styled"; 
import axios from "axios";



function Portfolio(params) {



  const [images , setImages ] = useState([])

  useEffect( () => {
    axios.get('js/data.json').then(res => {setImages (res.data.portfolio) })
  } , [] ) 
  const portfolioImage = images.map( (imageItem) => {
    return(
      <ImageContainer key={imageItem.id}>
      <Image src={imageItem.image} alt="" />
      <Overlay>
          <OverlaySpan>
              Show Image
          </OverlaySpan>
      </Overlay>
  </ImageContainer>
    )
  });
  

  return(
    <PortfolioSection>
    <Title><Span>My</Span> Portfolio</Title>
    <List>
        <Items active >All</Items>
        <Items>HTML</Items>
        <Items>Photoshop</Items>
        <Items>Wordpress</Items>
        <Items>Mobile</Items>
    </List>
    
    <div className="box">
        {portfolioImage}
        
    </div>
    
  </PortfolioSection> 
  )
}



  export default Portfolio ; 