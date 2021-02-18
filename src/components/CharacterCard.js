import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = ({ results, setHovered }) => {
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
                  <FontAwesomeIcon icon="star" className="card-icon" />
                  <span>SAVE</span>
               </div>
            </div>
         </div>
      );
   });
};

export default CharacterCard;
