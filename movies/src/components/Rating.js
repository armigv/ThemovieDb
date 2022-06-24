import React from "react";
import { FaStar } from "react-icons/fa";

import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


import {useStateValue} from '../StateProvider';
import { actionType } from "../Core/reducer";
import Movies from "./pages/movies";
 
export default function Ratting() {
  const [{filterMovies},dispatch] = useStateValue()

  console.log(filterMovies);


  const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};


  // function name(index) {

  //   if (fiterMovies.filter((movies)=>movies.vote_average >= 0 && movies.vote_average <= 2))  {
  
  //   }
  //   else if (fiterMovies.filter((movies)=>movies.vote_average >= 2 && movies.vote_average <= 4))  {

  //   } 
  //   else if (fiterMovies.filter((movies)=>movies.vote_average >= 4 && movies.vote_average <= 6)) {

  //   }
    
  //   else if (fiterMovies.filter((movies)=>movies.vote_average >= 6 && movies.vote_average <= 8)) {


  //   }
  //   else if (fiterMovies.filter((movies)=>movies.vote_average >= 8 && movies.vote_average <= 10)) {


  //   }

    
  //    else {
      
  //   }
  // }


  

   
  const totalStars = 5;

  function ratingChanged(event) {
    
   
    dispatch({
      type: actionType.RATING_FILTER,
      value:{index: event, filterMovies:filterMovies}

    })
  }

 
return(
  
  <div style={styles.container}>
  <h2> React Ratings </h2>
  <div style={styles.stars}>
    {[...new Array(totalStars)].map((_, index) => {
      return (
        <FaStar
          key={index}
          size={24}
          onClick={() => ratingChanged(index + 1)}
          // onMouseOver={() => handleMouseOver(index + 1)}
          // onMouseLeave={handleMouseLeave}
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











// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

// const Rating = () => {
//   const [activeStar, setActiveStar] = useState();
//   const totalStars = 5;
//   const handleClick = (index) => {
//     setActiveStar(index);
//   };
//   return (
//     <Box
//       sx={{
//         display: 'inline-flex',
//         position: 'relative',
//         cursor: 'pointer',
//         textAlign: 'left',
//       }}
//     >
//       {[...new Array(totalStars)].map(( index) => {
//         return (
//           <Box

//             onClick={() => handleClick(index)}
//           >
//             <Box
//               sx={{
//                 width: index <= activeStar ? '100%' : '0%',
       
//               }}
//             >
//               <StarIcon />
//             </Box>
//             <Box>
//               <StarBorderIcon />
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };