import React from "react";
import {useState, useEffect } from "react";
import Shimer from "./Shimer";

const RestaurantMenu = () => {
 
    const [resInfo,setResInfo]= useState(null);
    
   useEffect(() => {
    fetchMenu();
   }, []);   

   const fetchMenu = async () => {
    const data = await fetch("");
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
   };

  if (resInfo === null) return <Shimer /> ;
  
   const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
        <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
        <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
        </ul>
        </div>
    );
};

export default RestaurantMenu;