import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = ({ results, setHovered }) => {
   return results.map((char) => {
      return (
         <Link
            to={`/comics/${char._id}`}
            className="card"
            key={char._id}
            onMouseOver={() => {
               setHovered({
                  id: char._id,
                  name: char.name,
                  description: char.description,
                  picture: `${char.thumbnail.path}.${char.thumbnail.extension}`,
               });
            }}
         >
            <h2>{char.name}</h2>
            {/* <FontAwesomeIcon icon="star" /> */}
            <img
               src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
               alt={char.name}
            />
         </Link>
      );
   });
};

export default CharacterCard;
