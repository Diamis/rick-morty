import React, { useState, useCallback, useMemo } from "react";
import { throttle } from "lodash";

interface SearchInputProps {
  changeCallback: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ changeCallback }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const changeHandler = useCallback((query: string) => {
    if (query.length > 1) {
      changeCallback(query);
    };
  }, []);

  const inputHandler = useMemo(() => throttle(changeHandler, 500), [changeHandler]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    inputHandler(value);
  };

  return (
    <div className="w-full">
      <input
        value={searchValue}
        placeholder="Search"
        className="w-full h-11 rounded-3xl px-3"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchInput;