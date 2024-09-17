import * as React from "react";
import styled from "styled-components";

interface GameEntryProps {
  image: string;
  name: string;
  position: string;
  releaseDate: string;
  description: string;
  index: number;
}

const GameEntryContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div<{ isEven: boolean }>`
  width: 100%;
  padding: 20px 20px 20px 0; // Reduced left padding
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 40%;
    padding: 20px; // Restore full padding on desktop
    order: ${props => props.isEven ? 0 : 1};
    justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};
  }
`;

const GameImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;

  @media (min-width: 768px) {
    max-width: none;
  }
`;

const ContentContainer = styled.div`
  padding: 0 20px 20px 20px; // Adjusted padding

  @media (min-width: 768px) {
    width: 60%;
    padding: 20px; // Restore full padding on desktop
  }
`;

const GameTitle = styled.h3`
  margin: 0 0 10px;
  color: #333;
  font-size: 22px;
  font-family: 'Merriweather', serif;
  font-weight: 700;
`;

const GameText = styled.p`
  margin: 0 0 5px;
  color: #555;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
`;

const GamePosition = styled(GameText)`
  font-weight: 700;
`;

const ReleaseDate = styled(GameText)`
  font-style: italic;
  margin-bottom: 10px;
`;

const GameDescription = styled(GameText)`
  margin: 10px 0 0;
  color: #666;
  line-height: 1.5;
`;

const GameEntry: React.FC<GameEntryProps> = ({ image, name, position, releaseDate, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <GameEntryContainer>
      <ImageContainer isEven={isEven}>
        <GameImage src={image} alt={name} />
      </ImageContainer>
      <ContentContainer>
        <GameTitle>{name}</GameTitle>
        <GamePosition>{position}</GamePosition>
        <ReleaseDate>{releaseDate}</ReleaseDate>
        <GameDescription>{description}</GameDescription>
      </ContentContainer>
    </GameEntryContainer>
  );
};

export default GameEntry;
