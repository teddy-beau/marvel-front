// import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/images/marvel-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "./Modal";
import Cookies from "js-cookie";

const Header = ({
   userCookie,
   userToken,
   search,
   setSearch,
   displayModal,
   setDisplayModal,
}) => {
   const history = useHistory(); // Handle redirect upon click

   return (
      <>
         <div className="container">
            <header>
               <Link to="/">
                  <img src={logo} alt="Marvel" />
               </Link>
               <div>
                  <label htmlFor="search">
                     <FontAwesomeIcon icon="search" />
                  </label>
                  <input
                     type="search"
                     id="search"
                     placeholder="Search..."
                     value={search}
                     onChange={(event) => {
                        setSearch(event.target.value);
                     }}
                  />
               </div>
               <nav>
                  <Link to="/">Characters</Link>
                  <Link to="/comics">Comics</Link>
                  {!userToken ? (
                     <div
                        className="white-to-red-button"
                        onClick={() => setDisplayModal(true)}
                     >
                        Sign up | Login
                     </div>
                  ) : (
                     <>
                        <Link to={`/user/${Cookies.get("userId")}`}>
                           My List
                        </Link>
                        <span
                           onClick={() => {
                              userCookie(null);
                              history.push("/");
                           }}
                        >
                           Log out
                        </span>
                     </>
                  )}
               </nav>
            </header>
         </div>
         <Modal
            displayModal={displayModal}
            setDisplayModal={setDisplayModal}
            userCookie={userCookie}
         />
      </>
   );
};

export default Header;
