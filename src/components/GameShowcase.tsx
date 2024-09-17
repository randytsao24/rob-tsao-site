import * as React from "react";
import GameEntry from "./GameEntry";

import assassinsCreedShadows from "@images/assassins-creed-shadows-multiplayer.jpg";
import avatarFrontiers from "@images/avatar-frontiers.jpg";
import ifrMyths from "@images/ifr-myths.jpg";
import immortalsFenyx from "@images/immortals-fenyx-rising.jpg";
import skullAndBones from "@images/skull-bones.jpg";

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
      releaseDate: "Nov 2024",
      description: "Narrative owner, writer, and lead on multiple critical path quests and emotional arcs across numerous regions. Script delivery, quest flow validation, character bios, voice recording, and polish on branching dialogues in open-world design."
    },
    {
      image: avatarFrontiers,
      name: "AVATAR: FRONTIERS OF PANDORA",
      position: "Writer",
      releaseDate: "Dec 2023",
      description: "Drove conceptualization, pitching, and execution on multiple sidequests. Delivered scripts for lock on time and worked with team to edit storylines, character voice, and narrative flows."
    },
    {
      image: ifrMyths,
      name: "IFR: MYTHS OF THE EASTERN REALM",
      position: "Narrative Lead / Assoc Producer",
      releaseDate: "Mar 2021",
      description: "Key production and narrative owner on a standalone DLC. Delivered full narrative blueprint, all character bios, and  script. Managed pipelines on cinematics, voice recording, and localization while driving project closing."
    },
    {
      image: immortalsFenyx,
      name: "IMMORTALS FENYX RISING",
      position: "Narrative Lead / Assoc Producer",
      releaseDate: "Mar 2021",
      description: "Key production and narrative owner on a standalone DLC. Delivered full narrative blueprint, all character bios, and  script. Managed pipelines on cinematics, voice recording, and localization while driving project closing."
    },
    {
      image: skullAndBones,
      name: "SKULL & BONES",
      position: "Associate Lead Game Designer",
      releaseDate: "Feb 2024",
      description: "Led multi-disciplinary team to deliver content and systems for spawning world ingredients and dictating wildlife behaviors in open-world action game."
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
