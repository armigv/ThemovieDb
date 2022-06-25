import React from "react";
import "./Css/box.css";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from "../StateProvider";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import Image from 'mui-image'


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 300,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});


function Cards(checked) {
  const [{ filterMovies }] = useStateValue();
  console.log(filterMovies);

  const classes = useStyles();
  const APIIMAGES = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <div className="grid">
        {filterMovies?.map((movies) => (
          <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>

            <Card
              className={classes.root}
              key={movies.id}
            >
              <Image alt={movies.title} className={classes.media} src={APIIMAGES + movies.poster_path} />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  className={classes.title}
                >
                  {movies.vote_average}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.desc}
                >
                  {movies.overview}
                </Typography>

                <LinkRouter to={`/pelicula/${movies.id}`}>
                  <button className="btn btn-primary">View more</button>
                </LinkRouter>

              </CardContent>
            </Card>
          </Collapse>
        ))}
      </div>
    </div>
  );
}

export default Cards;
