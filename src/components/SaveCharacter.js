import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const SaveCharacter = ({ character, setDisplayModal }) => {
   const [isInList, setIsInList] = useState(false);

   const addToList = async () => {
      const userId = Cookies.get("userId");
      if (!userId) {
         setDisplayModal(true);
      } else {
         // Check is in list
         //

         console.log("character: ", character);
         // Requête axios add to list
         const response = await axios.post(
            `https://marvel-teddy.herokuapp.com/characters/save`,
            { userId, character },
            {
               headers: {
                  Authorization: `Bearer ${Cookies.get("userToken")}`,
               },
            }
         );
         // Change icon front
         console.log("response", response);
         setIsInList(true);
      }
   };
   return (
      <div style={{ flexDirection: "row-reverse" }}>
         {isInList ? (
            <>
               <FontAwesomeIcon
                  icon="times-circle"
                  className="card-icon"
                  // onClick={() => {
                  //    removeFromList(character);
                  // }}
               />
               <span>REMOVE FROM LIST</span>
            </>
         ) : (
            <>
               <FontAwesomeIcon
                  icon="star"
                  className="card-icon"
                  onClick={() => {
                     addToList(character);
                  }}
               />
               <span>ADD TO LIST</span>
            </>
         )}
      </div>
   );
};

export default SaveCharacter;
