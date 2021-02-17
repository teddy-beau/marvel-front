import "./App.scss";
import { useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useState } from "react";

// CONTAINER IMPORT
import Comics from "./containers/Comics";
import Character from "./containers/Character";
import UserFav from "./containers/UserFav";
import Home from "./containers/Home";

// COMPONENT IMPORT
import Header from "./components/Header";
import Footer from "./components/Footer";

// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faStar,
   faSearch,
   faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faTimesCircle, faStar);

function App() {
   const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
   const userCookie = (token, id, username) => {
      if (token) {
         Cookies.set("userToken", token, { expires: 7 });
         Cookies.set("userId", id, { expires: 7 });
         Cookies.set("username", username, { expires: 7 });
         setUserToken(token);
      } else {
         Cookies.remove("userToken");
         Cookies.remove("userId");
         Cookies.remove("username");
         setUserToken(null);
      }
   };

   return (
      <Router>
         <Header userCookie={userCookie} userToken={userToken} />
         <Switch>
            <Route path="/comics/:characterId">
               <Character />
            </Route>
            <Route path="/comics">
               <Comics />
            </Route>
            <Route path="/user/:userId">
               <UserFav />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
         <Footer />
      </Router>
   );
}

export default App;
