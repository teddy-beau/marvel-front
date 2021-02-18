import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ComicCard from "../components/ComicCard";
import Preview from "../components/Preview";

const Character = (props) => {
   const { characterId } = useParams();

   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);

   const [hovered, setHovered] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(
            `https://marvel-teddy.herokuapp.com/comics/${characterId}`
         );
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
   }, [characterId]);

   return isLoading ? (
      <div className="container">Loading...</div>
   ) : (
      <div className="container">
         <h1>More about {data.name}</h1>
         <main>
            <section className="character-comics">
               <ComicCard comics={data.comics} setHovered={setHovered} />
            </section>
            <Preview hovered={hovered} />
         </main>
      </div>
   );
};

export default Character;
