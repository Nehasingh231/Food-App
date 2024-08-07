import React from "react";
import { useState, useEffect, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimer from "./Shimer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body =() => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")
     console.log("Body Rendered")
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940499&lng=85.1376051&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    setListOfRestaurants(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) 
    return(
  <h1>
  Look's Like you're offline !! Please check your internet connection..
  </h1>
    );

  const { loggedInUser, setUserName} =  useContext(UserContext);                        

  return listOfRestaurants.length === 0 ? ( 
     <Shimer />
  ) : (
       <div className="body">
       <div className="filter flex">
       <div className="search m-4 p-4">
       <input type ="text"
        className="border border-solid border-black" 
       value={searchText}
       onChange={(e) => {
setSearchText(e.target.value);
       }}
       />
       <button className="px-4 py-1 bg-violet-200 m-4 rounded-lg" 
       onClick={() => {
         const filteredRestaurant = listOfRestaurants.filter(
          (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

          setFilteredRestaurant(filteredRestaurant);

       }}> Search </button>
       </div>
       <div className="filter m-4 p-4 flex items-center">
       <button className="px-4 py-2 bg-pink-100 m-4 rounded-lg" onClick={() => {
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4
        );
        setListOfRestaurants(filteredList);
       }}>
       Top Rated Restaurants
       </button>
       </div>
       <div className="filter m-4 p-4 flex items-center">
       <label className="p-2">UserName: </label>
      <input className="border border-black p-2" 
      value={loggedInUser}
      onChange={(e) => setUserName(e.target.value)} />
       </div>
       </div>
       <div className="flex flex-wrap ">
         {filteredRestaurant.map((restaurant) => (
          <Link 
          key={restaurant.info.id}
          to={"restaurants/" + restaurant.info.id }
          >
           <RestaurantCard  resData={restaurant} />
           </Link>
         ))}
       </div>
       <div>
       </div>
       </div>
    );
   };
   export default Body;