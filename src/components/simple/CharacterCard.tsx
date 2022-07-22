import React from "react";
import { Character } from "../../types";

interface CharacterCardProps {
  character: Character;
  onClick?: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  const { image, name, species, status } = character;
  const tooltipData = `Name: ${name}\nStatus: ${status}\nSpecies: ${species}`;

  return (
    <div className="p-2">
      <div
        className="tooltip"
        data-tooltip={tooltipData}
        onClick={() => onClick && onClick(character)}>
        <img
          loading="lazy"
          src={image}
          width="140"
          height="140"
          alt={name} />
      </div>
    </div>
  );
}

export default CharacterCard;