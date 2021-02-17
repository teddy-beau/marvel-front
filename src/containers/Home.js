import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import CharacterCard from "../components/CharacterCard";

const Home = () => {
   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);

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
      <div>Loading...</div>
   ) : (
      <div className="container">
         <h1>
            {Cookies.get("username")
               ? `Your secret identity is safe with us, ${Cookies.get(
                    "username"
                 )} ;)`
               : "Hi there, stranger!"}
         </h1>
         <div className="character-list">
            <CharacterCard results={data.results} />
         </div>
      </div>
   );
};

export default Home;
