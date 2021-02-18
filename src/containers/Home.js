import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import CharacterCard from "../components/CharacterCard";
import Preview from "../components/Preview";

const Home = ({ search }) => {
   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);

   const [skip, setSkip] = useState(0); // For page nav
   const [limit, setLimit] = useState(100); // For page nav

   const [hovered, setHovered] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(
            `https://marvel-teddy.herokuapp.com/characters?limit=${limit}&skip=${skip}&name=${search}`
         );
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
      // console.log(data);
   }, [limit, skip, search]);
   return isLoading ? (
      <div className="container">Loading...</div>
   ) : (
      <div className="container">
         <h1>Discover characters of the Marvel Universe</h1>
         <main>
            <section className="character-list">
               <CharacterCard results={data.results} setHovered={setHovered} />
            </section>
            <Preview hovered={hovered} />
         </main>
      </div>
   );
};

export default Home;
