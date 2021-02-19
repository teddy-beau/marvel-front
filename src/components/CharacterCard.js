// import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Cookies from "js-cookie";
import SaveCharacter from "./SaveCharacter";

const CharacterCard = ({ results, setHovered, setDisplayModal }) => {
   return results.map((character) => {
      let picture = `${character.thumbnail.path}.${character.thumbnail.extension}`;
      return (
         <div
            className="card"
            key={character._id}
            onMouseOver={() => {
               setHovered({
                  id: character._id,
                  name: character.name,
                  description: character.description,
                  picture: picture,
               });
            }}
            onMouseOut={() => setHovered({})}
            style={{
               backgroundImage: `url(${picture})`,
            }}
         >
            <div>
               <Link to={`/comics/${character._id}`}>
                  <FontAwesomeIcon icon="info-circle" className="card-icon" />
                  <span>MORE INFO</span>
               </Link>
               <SaveCharacter
                  character={character}
                  setDisplayModal={setDisplayModal}
               />
            </div>
         </div>
      );
   });
};

export default CharacterCard;
