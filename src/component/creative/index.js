import React from "react";
import { CreativeInfo, CreativeSection, InfoDesc, InfoDir, InfoLink, InfoSpan, Title } from "./styled";





function Creative() {
    return(
        <CreativeSection>
        <div className="container">
            <CreativeInfo>
                <Title><InfoSpan>This is</InfoSpan> Me</Title>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoLink href="#">explicabo</InfoLink> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
            </CreativeInfo>
        </div>
    </CreativeSection>
    )
}

export default Creative ; 