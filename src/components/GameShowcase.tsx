import * as React from "react";
import GameEntry from "./GameEntry";

import assassinsCreedShadows from "@images/assassins-creed-shadows-multiplayer.jpg";
import avatarFrontiers from "@images/avatar-frontiers.jpg";
import ifrMyths from "@images/ifr-myths.jpg";
import immortalsFenyx from "@images/immortals-fenyx-rising.jpg";
import skullAndBones from "@images/skull-bones.jpg";
import unoGame from "@images/uno-game.jpg";
import monopolyGame from "@images/monopoly.jpg";
import warriorEpic from "@images/warrior-epic.jpg";

interface Game {
  image: string;
  name: string;
  position: string;
  releaseDate: string;
  description: string;
}

const GameShowcase: React.FC = () => {
  // This could be moved to a separate data file or fetched from an API
  const games: Game[] = [
    {
      image: assassinsCreedShadows,
      name: "ASSASSIN'S CREED SHADOWS",
      position: "Lead Narrative Designer",
      releaseDate: "Release Nov 2024",
      description: "Narrative owner, writer, and lead on multiple critical path quests and emotional arcs across numerous regions. Script delivery, quest flow validation, character bios, voice recording, and polish on branching dialogues in open-world design."
    },
    {
      image: avatarFrontiers,
      name: "AVATAR: FRONTIERS OF PANDORA",
      position: "Writer",
      releaseDate: "Shipped Dec 2023",
      description: "Drove conceptualization, pitching, and execution on multiple sidequests. Delivered scripts for lock on time and worked with team to edit storylines, character voice, and narrative flows."
    },
    {
      image: ifrMyths,
      name: "IFR: MYTHS OF THE EASTERN REALM",
      position: "Narrative Lead / Assoc Producer",
      releaseDate: "Shipped Mar 2021",
      description: "Key production and narrative owner on a standalone DLC. Delivered full narrative blueprint, all character bios, and  script. Managed pipelines on cinematics, voice recording, and localization while driving project closing."
    },
    {
      image: immortalsFenyx,
      name: "IMMORTALS FENYX RISING",
      position: "Narrative Lead / Assoc Producer",
      releaseDate: "Shipped Mar 2021",
      description: "Led a technical team to deliver an ambitious sim-ship on the Nintendo Switch. Drove cross-studio communication, planned timelines, and pushed on optimization initiatives."
    },
    {
      image: skullAndBones,
      name: "SKULL & BONES",
      position: "Associate Lead Game Designer",
      releaseDate: "Shipped Feb 2024",
      description: "Led multi-disciplinary team to deliver content and systems for spawning world ingredients and dictating wildlife behaviors in open-world action game."
    },
    {
      image: unoGame,
      name: "UNO",
      position: "Associate Lead Game Designer",
      releaseDate: "Shipped Aug 2016",
      description: "Led gameplay development and creative direction from conception to master and designed all new mechanics for DLC add-on cards based on Ubisoft properties."
    },
    {
      image: monopolyGame,
      name: "HASBRO GAME CHANNEL",
      position: "Game Designer",
      releaseDate: "Shipped Aug 2014",
      description: "Led feature, content, and user experience development from conception to master."
    },
    {
      image: warriorEpic,
      name: "WARRIOR EPIC",
      position: "Writer / Content Designer",
      releaseDate: "Shipped May 2009",
      description: "Worked as writer and then designer and handled narrative duties by creating story bible and working with quest designers to improve narrative flow on quests."
    },
  ];

  return (
    <div>
      {games.map((game, index) => (
        <GameEntry key={index} {...game} index={index} />
      ))}
    </div>
  );
};

export default GameShowcase;
