import { StyledServicesArea } from './ServicesArea.styled'
import { Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ComputerIcon from '@mui/icons-material/Computer';
import ImageIcon from '@mui/icons-material/Image';



const ServicesArea: React.FC = () => {
    return (
        <StyledServicesArea>
            <Typography fontWeight="900" className="section-title" variant="h3" component="div" gutterBottom>
                Services
            </Typography>
            <ul className="services-content">
                <li>
                    <ComputerIcon sx={{color:"crimson"}} />
                    <Typography fontWeight="700" className="section-title" variant="h6" component="div" gutterBottom>
                        Web Design
                    </Typography>
                    <p>
                        Lorem ipsum asdfasdgs sdgsdgsdg sdgsdg, sdgsdgsdg gr4e5ygherh dscfvsdv btrehnrtj
                    </p>
                </li>
                <li>
                    <TrendingUpIcon sx={{color:"crimson"}}/>
                    <Typography fontWeight="700" className="section-title" variant="h6" component="div" gutterBottom>
                        Markting
                    </Typography>
                    <p>
                        Lorem ipsum asdfasdgs sdgsdgsdg sdgsdg, sdgsdgsdg gr4e5ygherh dscfvsdv btrehnrtj
                    </p>
                </li>
                <li>
                    <ImageIcon sx={{color:"crimson"}}/>
                    <Typography fontWeight="700" className="section-title" variant="h6" component="div" gutterBottom>
                        Graphics
                    </Typography>
                    <p>
                        Lorem ipsum asdfasdgs sdgsdgsdg sdgsdg, sdgsdgsdg gr4e5ygherh dscfvsdv btrehnrtj
                    </p>
                </li>

            </ul>
        </StyledServicesArea>
    );
}
export default ServicesArea;