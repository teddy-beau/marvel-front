import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";

const CharacterCard = ({ results, setHovered, setDisplayModal }) => {
   const [isInList, setIsInList] = useState(false);

   const addToList = (id) => {
      if (!Cookies.get("userToken")) {
         setDisplayModal(true);
      } else {
         // Requête axios user list
         // Map user list
         //// if fav._id === char._id > set style
         //// else
         // If in list > state setIsInList(true)
         // Modifier state icon
         if (isInList) {
            setIsInList(false);
         } else {
            setIsInList(true);
         }
      }
   };

   return results.map((char) => {
      let picture = `${char.thumbnail.path}.${char.thumbnail.extension}`;
      return (
         <div
            className="card"
            key={char._id}
            onMouseOver={() => {
               setHovered({
                  id: char._id,
                  name: char.name,
                  description: char.description,
                  picture: picture,
               });
            }}
            onMouseOut={() => setHovered({})}
            style={{
               backgroundImage: `url(${picture})`,
            }}
         >
            <div>
               <Link to={`/comics/${char._id}`}>
                  <FontAwesomeIcon icon="info-circle" className="card-icon" />
                  <span>MORE INFO</span>
               </Link>
               <div style={{ flexDirection: "row-reverse" }}>
                  {isInList ? (
                     <>
                        <FontAwesomeIcon
                           icon="times-circle"
                           className="card-icon"
                           onClick={() => {
                              addToList(char._id);
                           }}
                        />
                        <span>REMOVE FROM LIST</span>
                     </>
                  ) : (
                     <>
                        <FontAwesomeIcon
                           icon="star"
                           className="card-icon"
                           onClick={() => {
                              addToList(char._id);
                           }}
                        />
                        <span>ADD TO LIST</span>
                     </>
                  )}
               </div>
            </div>
         </div>
      );
   });
};

export default CharacterCard;
