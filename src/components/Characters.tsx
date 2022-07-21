import React, { useEffect, useState } from "react";
import Request from '../services/Request';
import CharacterCard from "./ordinary/CharacterCard";
import SearchInput from "./ordinary/SearchInput";
import { Character } from "../types";

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const requestService = new Request();
  const [notFound, setNotFound] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  let timeoutID: ReturnType<typeof setTimeout>;

  const getCharacters = async (query?: string) => {
    setIsFetching(true)
    const data = await requestService.getCharacters(query);
    setIsFetching(false)
    if (data) {
      if (data.error) {
        setNotFound(true)
        return
      }
      setCharacters(data.results)
      setNotFound(false)
    } else {
      alert('Ошибка сервера,попробуйте обновите страницу.')
    }
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const timeoute = (query: string) => {
    if (timeoutID) {
      return
    }
    timeoutID = setTimeout(() => {
      getCharacters(query);
    }, 500);

    return () => clearTimeout(timeoutID);
  }

  return (
    <div className="w-8/12">
      <SearchInput changeCallback={timeoute} />
      {isFetching && <div className="mb-5 text-xl text-white  text-center">Fetching</div>}
      <div className="flex justify-center flex-wrap">
        {notFound ? (
          <div className="text-xl text-white text-center">Not Found</div>) :
          characters.map((item, key) => (
            <CharacterCard character={item} key={key} />
          ))}
      </div>
    </div>
  );
}

export default Characters;