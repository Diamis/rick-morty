import React, { useEffect, useState } from "react";
import Request from '../../services/Request';
import CharacterCard from "../simple/CharacterCard";
import SearchInput from "../ordinary/SearchInput";
import { Character } from "../../types";
import Current from "../../store/Current";

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const requestService = new Request();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const getCharacters = async (query?: string) => {
    setIsFetching(true);
    const data = await requestService.getCharacters(query);
    setIsFetching(false);
    if (data) {
      if (data.error) {
        setNotFound(true);
        setCharacters([]);
        return;
      }
      setCharacters(data.results);
      setNotFound(false);
    } else {
      alert('Ошибка сервера,попробуйте обновите страницу.');
    };
  }

  useEffect(() => {
    getCharacters();
  }, []);

  const setCurrentCharacter = (character: Character) => {
    if (character.name.includes('Rick')) {
      Current.setCharacterRick(character);
    } else if (character.name.includes('Morty')) {
      Current.setCharacterMorty(character);
    } else {
      return;
    };
  };

  return (
    <div className="w-8/12">
      <SearchInput changeCallback={getCharacters} />
      {isFetching && <div className="mb-5 text-xl text-white text-center">Fetching</div>}
      <div className="flex justify-center flex-wrap">
        {notFound ? (
          <div className="text-xl text-white text-rose-800">Not Found</div>) :
          characters.map((item, key) => (
            <CharacterCard
              character={item}
              onClick={setCurrentCharacter}
              key={key} />
          ))}
      </div>
    </div>
  );
}

export default Home;