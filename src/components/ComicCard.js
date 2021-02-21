// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddComic from "../components/AddComic";

const ComicCard = ({ comics, setHovered, setDisplayModal }) => {
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
               <AddComic comic={comic} setDisplayModal={setDisplayModal} />
            </div>
         </div>
      );
   });
};

export default ComicCard;
