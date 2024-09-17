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
  padding: 20px;

  @media (min-width: 768px) {
    width: 40%;
    order: ${props => props.isEven ? 0 : 1};
  }
`;

const GameImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const ContentContainer = styled.div`
  padding: 20px;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const GameEntry: React.FC<GameEntryProps> = ({ image, name, position, releaseDate, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <GameEntryContainer>
      <ImageContainer isEven={isEven}>
        <GameImage src={image} alt={name} />
      </ImageContainer>
      <ContentContainer>
        <h3 style={{ margin: '0 0 10px', color: '#333', fontSize: '20px' }}>{name}</h3>
        <p style={{ margin: '5px 0', color: '#555' }}><strong>Position:</strong> {position}</p>
        <p style={{ margin: '5px 0', color: '#555' }}><strong>Release Date:</strong> {releaseDate}</p>
        <p style={{ margin: '10px 0 0', color: '#666' }}>{description}</p>
      </ContentContainer>
    </GameEntryContainer>
  );
};

export default GameEntry;
