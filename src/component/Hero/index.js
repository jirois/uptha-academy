import React, { useState } from "react";
import { Button, ButtonLink } from "../ButtonElement";
import video from "../../videos/video_7.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroBlur,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <HeroBlur>
          <VideoBg autoPlay loop muted src={video} type="video/mp4" />
        </HeroBlur>
      </HeroBg>
      <HeroContent>
        <HeroH1>Uptha Learning Academy</HeroH1>
        <HeroP>
          Sign up for a learning that is practical and valuable for the your
          time and era!
        </HeroP>
        <HeroBtnWrapper>
          <ButtonLink
            to="/register"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
