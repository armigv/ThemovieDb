import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Cards from "../MoviesCards";
import Search from "../Search";
import Ratting from "../Rating";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
}));


export default function Movies() {

  const classes = useStyles();
  return (
    <div >
      <Ratting />
      <Search/>
      {/* <SortRating></SortRating> */}
      <Cards />
    </div>
  );
}
