import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    padding: 15px 35px;
    background: crimson;
    border-radius: 50px;
    color: #fff;
    &:hover {
      padding: 15px 35px;
      background: #0039e6;
      border-radius: 50px;
      color: #fff;
    }
  }
`;
