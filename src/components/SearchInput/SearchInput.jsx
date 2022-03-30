/** @format */

import { SearchForm, Input, Label } from "./SearchInputStyle";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({showForm}) => {
  return (
    <SearchForm isInputShow={showForm}>
      <Input type="search" id="search-box" placeholder="search here..." />
      <Label htmFor="search-box">
        <FaSearch className="input-icon"/>
      </Label>
    </SearchForm>
  );
};

export default SearchInput;
