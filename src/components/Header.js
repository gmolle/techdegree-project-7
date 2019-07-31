import React from "react";
import Nav from "./Nav";
import SearchForm from "./SearchForm";


// Renders the SearchForm and Nav components together in one Header component
const Header = (props) => {
  return (
    <div className="header">
      <SearchForm onSearch={props.onSearch} history={props.history} />
      <Nav />
    </div>
  );
}

export default Header;