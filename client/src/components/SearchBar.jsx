import React from "react";
import { Button } from "react-bootstrap";

const SearchBar = ({ setSearchs }) => {
  return (
    <div>
      {" "}
      <form action="/search" method="get">
        <span className="visually-hidden">Search blog posts</span>
        <label htmlFor="header-search"></label>
        <input
          className="search-input"
          type="text"
          id="header-search"
          placeholder="Search Products"
          name="s"
        />
        <Button
          style={{ height: "70%" }}
          variant="secondary"
          type="submit"
          onClick={() => setSearchs(true)}
        >
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
