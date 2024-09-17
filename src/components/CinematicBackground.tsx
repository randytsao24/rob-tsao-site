import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import assassinsCreedShadows from "@images/assassins-creed-shadows-multiplayer.jpg";
import avatarFrontiers from "@images/avatar-frontiers.jpg";
import ifrMyths from "@images/ifr-myths.jpg";
import immortalsFenyx from "@images/immortals-fenyx-rising.jpg";
import skullAndBones from "@images/skull-bones.jpg";

const images = [assassinsCreedShadows, avatarFrontiers, ifrMyths, immortalsFenyx, skullAndBones];

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundImage = styled.div<{ $image: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  transition: transform 10s ease-in-out;
  transform: scale(1.1);
  &.active {
    transform: scale(1);
  }
`;

const CinematicBackground: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundContainer>
      {images.map((image, index) => (
        <BackgroundImage
          key={index}
          $image={image}
          className={index === currentImageIndex ? 'active' : ''}
          style={{ opacity: index === currentImageIndex ? 1 : 0 }}
        />
      ))}
    </BackgroundContainer>
  );
};

export default CinematicBackground;