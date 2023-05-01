
import React from "react" ;
import { Drop, InputEmail, InputSub, InputText, TextArea, Title, TitleForm, TitleSpan  , InputSubmit} from "./styled";
import Footer from "../Footer/Index";

function Contact() {
    return (
      <React.Fragment>
          <Drop>
            <div className="container">
              <Title><TitleSpan>Drop </TitleSpan>Me A line</Title>
                <TitleForm>

                  <InputText type="text" placeholder="Your Name"/>
                  <InputEmail type="email" placeholder="Your Email" />

                  <InputSub type="text" className="sub" placeholder="Your Subject" />
                  <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                  <InputSubmit type="submit" value="Send Message"/>
              </TitleForm>

            </div>
          </Drop>
          <Footer />  
      </React.Fragment>
    );
  }
  

  export default Contact ; 