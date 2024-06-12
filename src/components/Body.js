import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer"

const Body =() => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")
    //  console.log("Body Rendered")
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    
    setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return listOfRestaurants.length === 0 ? <Shimer /> : (
       <div className="body">
       <div className="filter">
       <div className="search">
       <input type ="text" className="search-box" 
       value={searchText}
       onChange={(e) => {
setSearchText(e.target.value);
       }}
       />
       <button className="search-btn" onClick={() => {
         const filteredRestaurant = listOfRestaurants.filter(
          (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

          setFilteredRestaurant(filteredRestaurant);

       }}>search</button>
       </div>
       <button className="filter-btn" onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4
        );
        setListOfRestaurants(filteredList);
       }}>
       Top Rated Restaurants
       </button>
       </div>
       <div className="search">Search</div>
       <div className="res-container">
         {filteredRestaurant.map((restaurant) => (
           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
         ))}
       </div>
       </div>
    );
   };
   export default Body;