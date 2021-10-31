import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Header.styled";

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Typography fontWeight="900" className="title" variant="h2" component="div" gutterBottom>
                MyHeader
            </Typography>
            <div className="navDiv">
                <NavLink className="navLink" to='/'>
                    <Typography fontWeight="700" component="div" gutterBottom marginBottom="0">
                        link1
                    </Typography>
                </NavLink>
                <NavLink className="navLink" to='/'>
                    <Typography fontWeight="700" component="div" gutterBottom marginBottom="0">
                        link2
                    </Typography>
                </NavLink>
                <NavLink className="navLink" to='/'>
                    <Typography fontWeight="700" component="div" gutterBottom marginBottom="0">
                        link3
                    </Typography>
                </NavLink>
                <NavLink className="navLink" to='/'>
                    <Typography fontWeight="700" component="div" gutterBottom marginBottom="0">
                        link4
                    </Typography>
                </NavLink>
            </div>
        </StyledHeader>
    )
}
export default Header;