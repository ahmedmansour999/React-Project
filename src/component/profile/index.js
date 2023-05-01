
import axios from "axios";
import React , { useEffect, useState } from "react"; 
import { Desc, FSpan, Perc, Profile , ProfileItems, ProfileList, ProfileSkills, ProfileSpan, ProfileTitle,  Parent ,SkillsSection, Span, SpanA, Title, Web} from "./styled";



function Skills() {

    const [skill, setSkills] = useState([]);
    useEffect( () => {
        axios.get('js/data.json').then(res => (setSkills (res.data.skills)))
    },[])
    const personalSkills = skill.map( (skillItem) => {
        return(
            <Span items={skillItem.id} key={skillItem.id}>
            <Title>{skillItem.name}</Title>
            <Perc>{skillItem.precenatge}</Perc>
            <Parent>
                <FSpan></FSpan>
            </Parent>
        </Span>
        )
    })

    return(


    

    <ProfileSkills>
        <div className="container">
            <Profile>
                <ProfileTitle><ProfileSpan>My </ProfileSpan>Profile</ProfileTitle>
                <ProfileList>
                    <ProfileItems className="profile-item">
                        <SpanA>Name</SpanA>
                        Ahmed Mansour
                    </ProfileItems>
                    <ProfileItems className="profile-item">
                        <SpanA>Birthday</SpanA>
                        17/2/1999
                    </ProfileItems>
                    <ProfileItems className="profile-item">
                        <SpanA>Address</SpanA>
                        Banisuef
                    </ProfileItems>
                    <ProfileItems className="profile-item">
                        <SpanA>Phone</SpanA>
                        01119710541
                    </ProfileItems>
                    <ProfileItems className="profile-item">
                        <SpanA>Email</SpanA>
                        ahmedmanaour990@gmail.com
                    </ProfileItems>
                    <ProfileItems className="profile-item">
                        <SpanA>Website</SpanA>
                        <Web>www.google.com</Web>
                    </ProfileItems>
                </ProfileList>
            </Profile>
            
            <SkillsSection>
                <ProfileTitle>Some <ProfileSpan>skills</ProfileSpan></ProfileTitle>
                <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </Desc>
                    {personalSkills}
            </SkillsSection>
            
        </div>
    </ProfileSkills>

    )
};


export default Skills ;