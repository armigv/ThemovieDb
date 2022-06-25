import React from "react";
import { FaStar } from "react-icons/fa";
import { useStateValue } from '../StateProvider';
import { actionType } from "../Core/reducer";

export default function Ratting() {
  const [{ filterMovies }, dispatch] = useStateValue()

  console.log(filterMovies);


  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

  };



  const totalStars = 5;

  function ratingChanged(event) {


    dispatch({
      type: actionType.RATING_FILTER,
      value: { index: event, filterMovies: filterMovies }

    })
  }


  return (

    <div style={styles.container}>
      <h2> React Ratings </h2>
      <div style={styles.stars}>
        {[...new Array(totalStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => ratingChanged(index + 1)}

              color={(index + 1) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>


    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

}









