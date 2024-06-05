import React from "react";
import ReactDOM from "react-dom/client";

/**
 *  Header
 *   - Logo
 *   -Nav items
 *  Body
 *   - Search
 *   - RestaurantsContainer
 *   - RestaurantCard
 *       -Img
 *       -name of Res,Star ratings,delivery etc..   
 *  Footer
 *   -Copyright
 *    -Links
 *    -Address
 *    -Contacts
 */

const Header = () => {
    return(
        <div className="header">
        <div className="logo"> 
        <img src="https://image.winudf.com/v2/image1/Y29tLkZvb2RMb2dvRGVzaWduLm1kcHJhc25hX3NjcmVlbl82XzE1NDg2MzI4NTNfMDQ3/screen-6.jpg?fakeurl=1&type=.jpg" /> 
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </ul>
        </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resName, cuisine} =props; //this is just destructuring method
    return(
        <div className="res-card">
        <img className="res-logo" 
        alt="res-img" 
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/41710721b86f5e7e9ec7068935c0faa7"/>
        <h3>{resName}</h3>
        <h4> {cuisine} </h4>
        <h4>4.4 stars</h4>
        <h4>35 minutes</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
        <div className="search">search</div>
        <div className="res-container">
        <RestaurantCard
         resName ="Waayu Foods"
         cuisine ="Biryani, North Indian, Asian"/>
        <RestaurantCard resName = "KFC"
        cuisine ="Burger, Fast Food" />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
        <Header />
        <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);