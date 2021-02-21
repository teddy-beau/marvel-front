import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ displayModal, setDisplayModal, userCookie }) => {
   const history = useHistory();

   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const [displayLogin, setDisplayLogin] = useState(true);

   const switchForm = () => {
      if (displayLogin) {
         setDisplayLogin(false);
      } else {
         setDisplayLogin(true);
      }
   };

   const handleSubmit = async (event) => {
      event.preventDefault();
      try {
         if (displayLogin) {
            const response = await axios.post(
               `https://marvel-teddy.herokuapp.com/user/login`,
               {
                  email: email,
                  password: password,
               }
            );
            userCookie(
               response.data.token,
               response.data._id,
               response.data.username
            );
            history.push(`/user/${response.data._id}`);
         } else {
            const response = await axios.post(
               `https://marvel-teddy.herokuapp.com/user/signup`,
               {
                  email: email,
                  username: username,
                  password: password,
               }
            );
            userCookie(
               response.data.token,
               response.data._id,
               response.data.username
            );
            history.push(`/user/${response.data._id}`);
            console.log(response.data);
         }
         setDisplayModal(false);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div
         className="modal-container"
         style={{ display: displayModal ? "flex" : "none" }}
      >
         <div className="modal-frame">
            <FontAwesomeIcon
               icon="times-circle"
               onClick={() => setDisplayModal(false)}
            />

            <div>
               <div
                  onClick={switchForm}
                  className={displayLogin ? "red-button" : "white-button"}
               >
                  Log in
               </div>
               <div
                  onClick={switchForm}
                  className={!displayLogin ? "red-button" : "white-button"}
               >
                  Sign up
               </div>
            </div>
            {displayLogin ? (
               <form
                  style={{ opacity: displayLogin ? "flex" : "none" }}
                  onSubmit={handleSubmit}
               >
                  <input
                     type="text"
                     value={email}
                     placeholder="E-mail"
                     onChange={(event) => setEmail(event.target.value)}
                  />
                  <input
                     type="password"
                     value={password}
                     placeholder="Password"
                     onChange={(event) => setPassword(event.target.value)}
                  />
                  <button type="submit" className="white-button">
                     Log in
                  </button>
               </form>
            ) : (
               <form
                  style={{ display: !displayLogin ? "flex" : "none" }}
                  onSubmit={handleSubmit}
               >
                  <input
                     type="email"
                     value={email}
                     placeholder="E-mail"
                     onChange={(event) => setEmail(event.target.value)}
                  />
                  <input
                     type="text"
                     value={username}
                     placeholder="Username"
                     onChange={(event) => setUsername(event.target.value)}
                  />
                  <input
                     type="password"
                     value={password}
                     placeholder="Password"
                     onChange={(event) => setPassword(event.target.value)}
                  />
                  <button type="submit" className="white-button">
                     Sign up now
                  </button>
               </form>
            )}
         </div>
      </div>
   );
};

export default Modal;
