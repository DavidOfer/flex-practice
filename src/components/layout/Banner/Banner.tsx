import { Typography } from "@mui/material";
import { StyledButton } from "../../UI/Button/StyledButton.styled";
import { StyledBanner } from "./Banner.styled";

const Banner: React.FC = () => {
    return (
        <StyledBanner>
            <div className="banner-image">

            </div>
            <Typography className="bannerh1" fontWeight="900" variant="h2" component="div">
                FlexBox Website
            </Typography>
            <Typography fontWeight="700" variant="h4" component="div" gutterBottom>
                Responsive Web Design
            </Typography>
            <StyledButton>Contact us</StyledButton>
        </StyledBanner>
    );
}
export default Banner;