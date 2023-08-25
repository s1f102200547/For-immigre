import styled from "styled-components";
import { Button } from "@mui/material";

export default function FirstMainContents({ toggleSecondScreen }){

    return(
        <>
            <WelcomeMessage>Welcome to For immigre</WelcomeMessage>
            <CompanyOverview>Introduction to Australia's attractions and situation for immigration</CompanyOverview>
            <Button
                variant="contained"
                color='success'
                onClick={ toggleSecondScreen }
                sx={{
                    backgroundColor: "#00fa00",
                    paddingTop: "7px",
                    paddingBottom: "7px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    fontSize: "17px",
                    fontWeight: "bold",
                    textShadow: "1px 1px 5px #000000",
                    opacity: 0.9,
                    textTransform: 'none',
                    position: "relative",
                    bottom: "40px",
                    minWidth: "150px"
                }}
              >
                Sign in with your Account
            </Button>
        </>
    );
}

const WelcomeMessage = styled.p`
    margin-top:-10px;
    font-weight:400;
    font-size:40px;
    color:#d3d3d3;
    text-shadow:1px 1px 1px #000000;
`;
const CompanyOverview = styled.p`
    color:#d3d3d3;
    font-size:18px;
    text-shadow:1px 1px 1px #2A2A2A;
    position:relative;
    bottom:40px;
`;