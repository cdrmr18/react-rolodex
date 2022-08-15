import React from "react";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <div>
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
