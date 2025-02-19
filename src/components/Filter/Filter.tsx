import React from "react";

import useCharacterFilter from "../../hooks/useCharacterFilter";
import { ReactComponent as MagnifierIcon } from "../../assets/images/svg/magnifier.svg";
import "./Filter.scss";

const Filter: React.FC = () => {
  const { handleReset, handleInputChange, inputValue, resultsCount } =
    useCharacterFilter();

  return (
    <div className="Filter">
      <div className="SearchBoxContainer">
        <MagnifierIcon />
        <input
          className="SearchBox"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search a character..."
        />
        {inputValue !== "" && <button onClick={handleReset}>x</button>}
      </div>
      <p className="ResultsCount">{resultsCount} results</p>
    </div>
  );
};

export default Filter;
