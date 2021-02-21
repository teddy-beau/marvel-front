import { useState, useEffect } from "react";
import axios from "axios";
// import Cookies from "js-cookie";

import ComicCard from "../components/ComicCard";
import Preview from "../components/Preview";
import PageNav from "../components/PageNav";

const Comics = ({ search, setDisplayModal }) => {
   const [data, setData] = useState();
   const [isLoading, setIsLoading] = useState(true);

   const [skip, setSkip] = useState(0); // For page nav
   const [limit, setLimit] = useState(100); // For page nav

   const [hovered, setHovered] = useState({});

   useEffect(() => {
      const fetchData = async () => {
         const response = await axios.get(
            `https://marvel-teddy.herokuapp.com/comics?limit=${limit}&skip=${skip}&title=${search}`
         );
         setData(response.data);
         setIsLoading(false);
      };
      fetchData();
   }, [limit, skip, search]);

   return isLoading ? (
      <div className="container">Loading...</div>
   ) : (
      <div className="container">
         <h1>Browse through Marvel's comics collection</h1>
         <main>
            <section className="character-list">
               <ComicCard
                  comics={data.results}
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
   );
};

export default Comics;
