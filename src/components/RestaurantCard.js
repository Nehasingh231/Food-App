import React, { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props)=> { 
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext);
    const {cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla,
    } = resData?.info;


    return(
        <div className="m-4 p-4 w-[200px] bg-gray-200 rounded-lg border border-gray-300 hover:transform scale-100">
        <img className="rounded-lg" 
        alt="res-img" 
        src={CDN_URL+ cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{sla.slaString}</h4>
        <h4>User: {loggedInUser}</h4>
        </div>
    );
};
export default RestaurantCard;