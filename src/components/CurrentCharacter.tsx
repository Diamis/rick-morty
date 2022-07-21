import React from "react";
import { observer } from "mobx-react-lite";
import Current from "../store/Current";
import CharacterCard from "./ordinary/CharacterCard";

const CurrentCharacter: React.FC = observer(() => {
  return (
    <div className="w-4/12">
      <div className="text-center text-xl text-white">{'Rick & Morty block'}</div>
      <div className="flex justify-center">
        <div className="p-1 border-2 border-orange-500 flex w-80 h-44">
          {!!Current.characterRick && (
            <CharacterCard character={Current.characterRick} />
          )}
          {!!Current.characterMorty && (
            <CharacterCard character={Current.characterMorty} />
          )}
        </div>
      </div>
    </div>
  );
});

export default CurrentCharacter;