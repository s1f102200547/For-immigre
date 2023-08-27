import styled from 'styled-components';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import { Link } from "@mui/material";

import createTimer from "../../conponents/Timer";
import FirstMainContents from "./FirstMainContents";
import SecondMainContents from './SecondMainContents';
import forestImg from "../../img/forest.png";

//WARNING ログイン成功時に背景が緑にならない
export default function SignIn({ SetLoggedInUser }){
  const [isSecondScreen, setIsSecondScreen] = useState(false);
  const [blurredBackgroundColor, setBlurredBackgroundColor] = useState("white");

  const toggleSecondScreen = () => {
    setIsSecondScreen(!isSecondScreen);
  };

  function changeBlurredBackgroundColor(resultAuth){
      if(resultAuth){
        setBlurredBackgroundColor("green");
      }else{
        setBlurredBackgroundColor("red");
      }
      createTimer(3000)
      .then(() => {
        setBlurredBackgroundColor("white");
      })
  };

    return (
        <ScreenBackground>
          <BackGroundImg src={forestImg} alt="the forest" />
          <ContentWrapper>
            <CompanyInfoWrapper>
              <CompanyName data-testid="company-name">For immigre</CompanyName>
              {!isSecondScreen ?(
               <NavLinksToOtherContents>
               <Grid container spacing={1}>
                 <Grid xs={6}>
                   <Link to="/" underline="none">
                     <OtherContent>Homepage</OtherContent>
                   </Link>
                 </Grid>
                 <Grid xs={6}>
                   <Link href="/" underline="none">
                     <OtherContent>Contact</OtherContent>
                   </Link>
                 </Grid>
               </Grid>
             </NavLinksToOtherContents>
              ):
              <OtherContent data-testid="text-signin">Sign in</OtherContent>
              }
             
            </CompanyInfoWrapper>

            <MainWrapper>
              <BlurredBackground color={blurredBackgroundColor} />
              {isSecondScreen ? <SecondMainContents changeBlurredBackgroundColor={changeBlurredBackgroundColor} SetLoggedInUser={SetLoggedInUser} /> : <FirstMainContents  toggleSecondScreen={toggleSecondScreen}/>}
            </MainWrapper>

            <FooterWrapper>
                <Copyright data-testid="copyright">Copyright © 2017-2023 <Green>For immigre</Green>. All rights reserved.</Copyright>
            </FooterWrapper>
          </ContentWrapper>
        </ScreenBackground>
    )
}

const ScreenBackground = styled.div`
    background: green;
`;
const BackGroundImg = styled.img`
    width: 100%;
    height: 100vh;
    filter: blur(5px)
`;
const ContentWrapper = styled.div`
    width:100%;
    position: absolute;
    top: 43%;
    left: 50%;
    text-align:center;
    transform: translateY(-50%) translateX(-50%);
    -webkit- transform: translateY(-50%) translateX(-50%);
`;
const CompanyInfoWrapper = styled.div`
    position:relative;
    bottom:40px;
`;
const CompanyName = styled.p`
    color:#d3d3d3;
    text-shadow:1px 1px 1px #000000;
    font-size:30px;
    font-weight:400;
`;
const NavLinksToOtherContents = styled.div`
    margin: auto;
    width: 40%;
`;
const OtherContent = styled.p`
    color:#d3d3d3;
    font-weight:700;
    text-shadow:1px 1px 1px #2A2A2A;
    font-size:17px;
`;
const MainWrapper = styled.div`
    positon:relative;
    bottom:10px;
    transition: all .4s ease-in-out;
`;
const BlurredBackground = styled.div`
    position: absolute;
    top: 30%;
    left: 5%;
    width: 90%;
    height: 55%;
    background:${props=>props.color};
    opacity: 0.3;
`;
const FooterWrapper = styled.div`
    position: relative;
    top: 100px;
`;
const Copyright = styled.p`
    color:#d3d3d3;
    text-shadow:1px 1px 1px #2A2A2A;
    font-size:13px;
`;
const Green = styled.span`
    color:#00ff00;
`;