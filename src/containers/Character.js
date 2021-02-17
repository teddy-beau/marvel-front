import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Character = (props) => {
   const { characterId } = useParams();

   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(
            `https://marvel-teddy.herokuapp.com/comics/${characterId}`
         );
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
      console.log(data);
   }, [characterId, data]);

   return isLoading ? (
      <div>Loading...</div>
   ) : (
      <div className="container">
         <h1>{data.name}</h1>
         {data.description && <p>{data.description}</p>}
         <img
            src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            alt={data.name}
         />
         <div className="white-to-red-button">
            <FontAwesomeIcon icon="star" /> SAVE
         </div>
      </div>
   );
};

export default Character;
