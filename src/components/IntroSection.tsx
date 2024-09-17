import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const IntroContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IntroTitle = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 15px;
  font-size: 24px;
`;

const ThinDivider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 0 auto 20px;
  width: 50%;
`;

const IntroParagraph = styled.p`
  color: #444;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 1.5;
`;

const StyledLink = styled(Link)`
  color: #0066cc;
  text-decoration: none;
`;

const IntroSection: React.FC = () => {
  return (
    <>
      <IntroContainer>
        <IntroTitle>The Things I've Done</IntroTitle>
        <ThinDivider />
        <IntroParagraph>
          Welcome! My name's Robert Tsao and I'm currently a Lead Narrative Designer at Ubisoft working on the next Assassin's Creed title.
        </IntroParagraph>
        <IntroParagraph>
          More info on me can be found on the <StyledLink to="/about">About page</StyledLink>.
        </IntroParagraph>
        <IntroParagraph>
          Below is a list of relevant projects I've helped ship. I'm working on the details, but in the meantime, feel free to <StyledLink as="a" href="mailto:your.email@example.com">email me</StyledLink> if you have any questions.
        </IntroParagraph>
      </IntroContainer>
    </>
  );
};

export default IntroSection;
