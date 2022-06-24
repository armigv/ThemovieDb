import React from "react";
import { useStateValue } from "../StateProvider";
import { actionType } from "../Core/reducer";

const Search = () => {
  const [, dispatch] = useStateValue()
  const inputSearch = (event) => {
    dispatch({
      type: actionType.FILTER,
      value: event.target.value
    })

  }

  return (
    <>

      <form action="" class="search-bar">
        <input type="search" className="search" onChange={inputSearch} pattern=".*\S.*" required />
        
      </form>

    </>
  );
};

export default Search;