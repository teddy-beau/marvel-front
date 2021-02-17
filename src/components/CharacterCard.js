import { Link } from "react-router-dom";

const CharacterCard = ({ results }) => {
   return results.map((char) => {
      return (
         <Link
            to={`/comics/${char._id}`}
            className="character-card"
            key={char._id}
         >
            <h2>{char.name}</h2>
            <img
               src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
               alt={char.name}
            />
         </Link>
      );
   });
};

export default CharacterCard;
