import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import axios from "axios";

const FavCard = ({ list, displayComics }) => {
   let route = "characters";
   if (displayComics) {
      route = "comics";
   }
   // console.log("rroute", route);
   return list.map((item) => {
      let picture = `${item.thumbnail.path}.${item.thumbnail.extension}`;
      return (
         <div
            className="card fav-card"
            key={item._id}
            style={{
               backgroundImage: `url(${picture})`,
            }}
         >
            <div>
               <div
                  style={{ flexDirection: "row-reverse", marginLeft: "auto" }}
               >
                  <FontAwesomeIcon
                     icon="times-circle"
                     className="card-icon"
                     onClick={async () => {
                        try {
                           // axios request to remove from list
                           const response = await axios.post(
                              `https://marvel-teddy.herokuapp.com/${route}/unsave`,
                              {
                                 userId: Cookies.get("userId"),
                                 item: item,
                              },
                              {
                                 headers: {
                                    Authorization: `Bearer ${Cookies.get(
                                       "userToken"
                                    )}`,
                                 },
                              }
                           );
                           console.log("response", response);
                        } catch (error) {
                           console.log(error);
                        }
                     }}
                  />
                  <span>REMOVE FROM LIST</span>
               </div>
            </div>
         </div>
      );
   });
};

export default FavCard;
