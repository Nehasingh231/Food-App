import React from "react";
import Shimer from "./Shimer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    
if (resInfo === null) return <Shimer /> ;

const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

 const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log( resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

 const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.
 filter(c => c.cards?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 )

    return (
        <div className="menu">
        <h1>{name}</h1>
        <p> {cuisines.join(",")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>

          {itemCards.map((items) => (
            <li key = {items.card.info.id} >
            {items.card.info.name}-{" Rs. "}
            {items.card.info.price / 100 || items.card.info.defaultPrice / 100}
            </li>
    ))}
    
        </ul>
        </div>
    );
};

export default RestaurantMenu;