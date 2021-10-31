
import React from "react";
import { StyledButton } from "../../UI/Button/StyledButton.styled";
import { StyledAbout } from "./About.styled";


const About: React.FC = () => {
    return (
        <StyledAbout>
            <h3>About us</h3>
            <div className="about-content">
                <div className="about-left">
                </div>
                <div className="about-right">
                    <h2>About our Compnay</h2>
                    <p>
                        lorem ipsum fbfsdbdfbdfb dfbfdbdfbdf dfbdfbdfbdfb
                    </p>
                    <div className="buttonDiv">
                        <StyledButton>Learn More</StyledButton>
                    </div>
                </div>
            </div>
        </StyledAbout>
    );
}
export default About;