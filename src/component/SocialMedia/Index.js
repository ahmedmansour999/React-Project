import React , {useEffect , useState} from "react"
import { Icon, Info2, Para,  SocialMedia, SocialSection, SocialSpan } from "./styled";
import axios from "axios";





function Social() {

    const [Media , setMedia] = useState([]) ;

    useEffect(()=>{
        axios.get('../js/data.json').then(res=>(setMedia(res.data.social)))
    } , [] ) ;

    const NewMedia = Media.map( (mediaItems) => {
        return (
            <SocialSection item={mediaItems.id} key={mediaItems.id}>
            <Icon className={mediaItems.icon.join(' ')}></Icon>
            <Para>
                <SocialSpan >{mediaItems.title}</SocialSpan>
                <Info2 >{mediaItems.info}</Info2>
            </Para>
            </SocialSection>

        )
    }) ;        

    return (
      
        <SocialMedia>
            
            {NewMedia}
    
        </SocialMedia>
    )
  } ;
  

  export default Social ; 