import React from "react";
import {useState, useEffect } from "react";
import Shimer from "./Shimer";

const RestaurantMenu = (props) => {
 
    const [resInfo,setResInfo]= useState(null);
    
   useEffect(() => {
    fetchMenu();
   }, []);

   

   const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=725082&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data)
   };



    return (resInfo === null) ? ( <Shimer /> ) : (
        <div className="menu">
        
        <h2> {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
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