// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicCard = ({ comics, setHovered }) => {
   return comics.map((comic) => {
      let picture = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
      return (
         <div
            to={`/comics/${comic._id}`}
            className="card"
            key={comic._id}
            onMouseOver={() => {
               setHovered({
                  id: comic._id,
                  name: comic.title,
                  description: comic.description,
                  picture: picture,
               });
            }}
            onMouseOut={() => setHovered({})}
            style={{ backgroundImage: `url(${picture})` }}
         >
            <div>
               {/* <div to={`/comics/${comic._id}`}>
                  <FontAwesomeIcon icon="info-circle" className="card-icon" />
                  <span>MORE INFO</span>
               </div> */}
               <div
                  style={{
                     flexDirection: "row-reverse",
                     marginLeft: "auto",
                  }}
               >
                  <FontAwesomeIcon icon="star" className="card-icon" />
                  <span>SAVE</span>
               </div>
            </div>
         </div>
      );
   });
};

export default ComicCard;
