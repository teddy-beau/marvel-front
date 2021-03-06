import { useState, useEffect } from "react";
import axios from "axios";
// Component import
import CharacterCard from "../components/CharacterCard";
import PageNav from "../components/PageNav";
import Preview from "../components/Preview";
import Hero from "../components/Hero";

const Home = ({ search, setDisplayModal }) => {
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

   return (
      <>
         <Hero />
         {isLoading ? (
            <div className="container">Loading...</div>
         ) : (
            <div className="container">
               <h1>Browse through characters of the Marvel Universe</h1>
               <main>
                  <section className="character-list">
                     <CharacterCard
                        results={data.results}
                        setHovered={setHovered}
                        setDisplayModal={setDisplayModal}
                     />
                  </section>
                  <Preview hovered={hovered} />
               </main>
               <PageNav
                  count={data.count}
                  skip={skip}
                  setSkip={setSkip}
                  limit={limit}
                  setLimit={setLimit}
               />
            </div>
         )}
         ;
      </>
   );
};

export default Home;
