
import React from "react"
import { Btn, HomeDesc, HomeInfo, HomeInformation, HomeSection, HomeTitle } from "./styled";

function Home() {
    return (
      <HomeSection>
                  <div className="container">
                      <HomeInformation >
                          <HomeTitle>Ahmed Mansour </HomeTitle>
                          <HomeInfo>Web developer</HomeInfo>
                          <HomeDesc>
                              Iam a professional <span>Front-End Developer</span> and Back-End Developer creating modern and resposive designs to Web . Let us work together. Thank you. 
                          </HomeDesc>
                          <Btn className="home-btn">Let's Begin</Btn>
                      </HomeInformation>
                  </div>
        </HomeSection>
    );
  }
  

  export default Home ; 