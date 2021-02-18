import { Link } from "react-router-dom";

const ComicCard = ({ comics, setHovered }) => {
   return comics.map((comic) => {
      return (
         <Link
            to={`/comics/${comic._id}`}
            className="card"
            key={comic._id}
            onMouseOver={() => {
               setHovered({
                  id: comic._id,
                  name: comic.title,
                  description: comic.description,
                  picture: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
               });
            }}
         >
            <h2>{comic.title}</h2>
            <img
               src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
               alt={comic.title}
            />
         </Link>
      );
   });
};

export default ComicCard;
