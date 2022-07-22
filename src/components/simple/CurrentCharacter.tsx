import React from "react";
import { observer } from "mobx-react-lite";
import Current from "../../store/Current";
import CharacterCard from "./CharacterCard";

const CurrentCharacter: React.FC = observer(() => {
  return (
    <div className="w-4/12">
      <div className="text-center text-xl text-white">{'Rick & Morty block'}</div>
      <div className="flex justify-center">
        <div className="p-1 border-2 border-orange-500 flex w-80 h-44">
          <div className="flex-1">
            {!!Current.characterRick && (
              <CharacterCard character={Current.characterRick} />
            )}
          </div>
          <div className="flex-1">
            {!!Current.characterMorty && (
              <CharacterCard character={Current.characterMorty} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default CurrentCharacter;