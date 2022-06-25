import React from "react";

import Cards from "../MoviesCards";
import Search from "../Search";
import Ratting from "../Rating";

export default function Movies() {

  return (
    <div >
      <Ratting />
      <Search />
      <Cards />
    </div>
  );
}
