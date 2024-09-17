import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import styled from "styled-components";

import ProfileSection from "@components/ProfileSection";
import IntroSection from "@components/IntroSection";
import GameShowcase from "@components/GameShowcase";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(
    135deg,
    #f0f0f0 25%,
    #e8e8e8 25%,
    #e8e8e8 50%,
    #f0f0f0 50%,
    #f0f0f0 75%,
    #e8e8e8 75%,
    #e8e8e8 100%
  );
  background-size: 40px 40px;
  color: #333;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainContent>
      <ContentWrapper>
        <ProfileSection />
        <IntroSection />
        <GameShowcase />
      </ContentWrapper>
    </MainContent>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Robert Tsao - Narrative Designer</title>;
