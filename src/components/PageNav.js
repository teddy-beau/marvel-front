import { useState } from "react";
import { useLocation } from "react-router-dom";

const PageNav = ({ limit, setLimit, page, setPage }) => {
   const location = useLocation();

   return (
      (location.pathname === "/" || location.pathname === "/comics") && (
         <div className="page-nav">
            {page > 1 && (
               <span
                  onClick={() => {
                     setPage(page - 1);
                     console.log(page);
                  }}
               >
                  ← Page précédente
               </span>
            )}
            <div>
               Résultats par page :
               <span
                  onClick={() => {
                     setLimit(10);
                     console.log(page);
                  }}
               >
                  [10]
               </span>
               <span
                  onClick={() => {
                     setLimit(25);
                     console.log(page);
                  }}
               >
                  [25]
               </span>
               <span
                  onClick={() => {
                     setLimit(50);
                  }}
               >
                  [50]
               </span>
            </div>
            {page * limit < data.count && (
               <span
                  onClick={() => {
                     setPage(page + 1);
                  }}
               >
                  Page suivante →
               </span>
            )}
         </div>
      )
   );
};

export default PageNav;
