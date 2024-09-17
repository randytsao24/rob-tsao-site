import * as React from "react";
import styled from "styled-components";

import headpic from "@images/headpic.jpg";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  text-align: center;
  min-height: 160px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: left;
    min-height: 170px;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 25px;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.h1`
  margin: 0;
  font-size: 28px;
  color: #333;
  font-family: 'Merriweather', serif;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const ProfileTitle = styled.p`
  margin: 4px 0 0;
  font-size: 16px;
  color: #666;
  font-family: 'Lato', sans-serif;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const ProfileSection: React.FC = () => {
  return (
    <>
      <ProfileContainer>
        <ImageContainer>
          <ProfileImage src={headpic} alt="Portrait" />
        </ImageContainer>
        <ProfileInfo>
          <ProfileName>ROBERT TSAO</ProfileName>
          <ProfileTitle>Narrative Designer / Scriptwriter</ProfileTitle>
        </ProfileInfo>
      </ProfileContainer>
    </>
  );
};

export default ProfileSection;
