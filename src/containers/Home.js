import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import CharacterCard from "../components/CharacterCard";
import Preview from "../components/Preview";

const Home = () => {
   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);

   const [hovered, setHovered] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(
            `https://marvel-teddy.herokuapp.com/characters`
         );
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
      // console.log(data);
   }, []);

   return isLoading ? (
      <div className="container">Loading...</div>
   ) : (
      <div className="container">
         <h1>
            {Cookies.get("username")
               ? `Your secret identity is safe with us, ${Cookies.get(
                    "username"
                 )} ;)`
               : "Hi there, stranger!"}
         </h1>
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
