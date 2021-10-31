import { StyledButton } from "../../UI/Button/StyledButton.styled";
import { StyledBanner } from "./Banner.styled";

const Banner:React.FC = () => {
    return(
        <StyledBanner>
            <div className="banner-image">

            </div>
            <h1>
                FlexBox Website
            </h1>
            <h2>Responsive Web Design</h2>
            <StyledButton>Contact us</StyledButton>
        </StyledBanner>
    );
}
export default Banner;