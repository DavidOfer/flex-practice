import { Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { StyledContact } from "./Contact.styled";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Contact: React.FC = () => {
    return (
        <StyledContact>
            <Typography className="contact-title" fontWeight="900" variant="h3" component="div">
                Contact
            </Typography>
            <ul className="contact-content">
                <li>
                    <LocationOnIcon sx={{color:"crimson"}} />
                    <p>
                        2424 Woodstock lane <br/>Blackrock, UK
                    </p>
                </li>
                <li>
                    <LocalPhoneIcon sx={{color:"crimson"}}/>
                    <p>
                        +972 54-345-654 <br/>+972 54-345-654
                    </p>
                </li>
                <li>
                    <EmailIcon sx={{color:"crimson"}}/>
                    <p>
                        info@mymail.com <br/> moremail@mail.com
                    </p>
                </li>
            </ul>
        </StyledContact>
    );
}
export default Contact;