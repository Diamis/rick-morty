import React, { useState } from "react";

interface SearchInputProps {
  changeCallback: (value: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ changeCallback }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 1) {
      changeCallback(value);
    };
  }

  return (
    <>
      <div className="w-full">
        <input
          value={searchValue}
          placeholder="Search"
          className="w-full h-11 rounded-3xl px-3"
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default SearchInput;