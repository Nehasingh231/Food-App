import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
        <div className="logo">
        <img 
        className="logo"
        src="https://image.winudf.com/v2/image1/Y29tLkZvb2RMb2dvRGVzaWduLm1kcHJhc25hX3NjcmVlbl82XzE1NDg2MzI4NTNfMDQ3/screen-6.jpg?fakeurl=1&type=.jpg" 
         />
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        </ul>
        </div>
        </div>
    );
};

const RestaurantCard = (props)=> {
    const {resData} = props;
    const {cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      deliveryTime,
    } = resData?.info;

    return(
        <div className="res-card">
        <img className="res-logo" 
        alt="res-img" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} Stars</h4>
        </div>
    );
};

const resList=[
   {
              "info": {
                "id": "126292",
                "name": "UBQ by Barbeque Nation",
                "cloudinaryImageId": "wbdvil5g2dvy1logvqrg",
                "locality": "Patna One Mall",
                "areaName": "Fraser Road",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "North Indian",
                  "Barbecue",
                  "Biryani",
                  "Kebabs",
                  "Mughlai",
                  "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "10804",
                "avgRatingString": "4.1",
                "totalRatingsString": "5K+",
                "sla": {
                  "deliveryTime": 40,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "40-45 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-one-mall-fraser-road-patna-126292",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "725082",
                "name": "Pizza Hut",
                "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
                "locality": "Kankar Bagh",
                "areaName": "Patna",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Pizzas"
                ],
                "avgRating": 4,
                "parentId": "721",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 2.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "2.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 01:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-Pizza.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-kankar-bagh-patna-patna-725082",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "646961",
                "name": "Wow! Momo",
                "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                "locality": "Chauraha",
                "areaName": "Boring Canal Road",
                "costForTwo": "₹300 for two",
                "cuisines": [
                  "Tibetan",
                  "Healthy Food",
                  "Asian",
                  "Chinese",
                  "Snacks",
                  "Continental",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 4.2,
                "parentId": "1776",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 36,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 00:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-Chinese.png",
                      "description": "Delivery!"
                    },
                    {
                      "imageId": "Rxawards/_CATEGORY-Momos.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Chinese.png"
                          }
                        },
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-Momos.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/wow-momo-chauraha-boring-canal-road-patna-646961",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "305805",
                "name": "Barbeque Nation",
                "cloudinaryImageId": "csxizbaa7bt9ybnolmq4",
                "locality": "Patna One Mall",
                "areaName": "Fraser Road",
                "costForTwo": "₹600 for two",
                "cuisines": [
                  "North Indian",
                  "Barbecue",
                  "Biryani",
                  "Kebabs",
                  "Mughlai",
                  "Desserts"
                ],
                "avgRating": 4.1,
                "parentId": "2438",
                "avgRatingString": "4.1",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 34,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/barbeque-nation-one-mall-fraser-road-patna-305805",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "591085",
                "name": "0612 Road Chef",
                "cloudinaryImageId": "qo1ypqreeaulytd7cmgr",
                "locality": "Sanjay Nagar Road",
                "areaName": "Kankarbagh",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Chinese",
                  "Biryani"
                ],
                "avgRating": 4.3,
                "parentId": "22680",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 23,
                  "lastMileTravel": 1.2,
                  "serviceability": "SERVICEABLE",
                  "slaString": "20-25 mins",
                  "lastMileTravelString": "1.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 00:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/0612-road-chef-sanjay-nagar-road-kankarbagh-patna-591085",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "230250",
                "name": "Pour Tous",
                "cloudinaryImageId": "lnjmdcml4anmh5hhdwv0",
                "locality": "Patliputra Colony",
                "areaName": "Patliputra Colony",
                "costForTwo": "₹550 for two",
                "cuisines": [
                  "North Indian",
                  "Biryani",
                  "Chinese"
                ],
                "avgRating": 4.4,
                "parentId": "160184",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 35,
                  "lastMileTravel": 6.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "6.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/pour-tous-patliputra-colony-patna-230250",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "712099",
                "name": "Grameen Kulfi",
                "cloudinaryImageId": "930b886678eb9de74b5a3150bdd0f405",
                "locality": "Hanuman Nagar",
                "areaName": "Kailash Puri Road",
                "costForTwo": "₹120 for two",
                "cuisines": [
                  "Ice Cream",
                  "Desserts"
                ],
                "avgRating": 4.7,
                "veg": true,
                "parentId": "12175",
                "avgRatingString": "4.7",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 26,
                  "lastMileTravel": 4.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "4.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 01:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "pureveg",
                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/grameen-kulfi-hanuman-nagar-kailash-puri-road-patna-712099",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "88781",
                "name": "Sujata Family Restaurant",
                "cloudinaryImageId": "np13tsnfrxylkrk1ykm5",
                "locality": "Fraser Road Area",
                "areaName": "Srikrishnapuri",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "North Indian",
                  "Biryani",
                  "Kebabs"
                ],
                "avgRating": 3.8,
                "parentId": "196672",
                "avgRatingString": "3.8",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:45:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹199",
                  "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/sujata-family-restaurant-fraser-road-area-srikrishnapuri-patna-88781",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "594671",
                "name": "Baskin Robbins - Ice Cream Desserts",
                "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
                "locality": "People Cooperative Colony",
                "areaName": "Kankarbagh",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "Desserts",
                  "Ice Cream"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "5588",
                "avgRatingString": "4.4",
                "totalRatingsString": "500+",
                "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 3.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "3.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 00:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-people-cooperative-colony-kankarbagh-patna-594671",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "492412",
                "name": "Behrouz Biryani",
                "cloudinaryImageId": "1a8dfa8b2a73ddf7c6193465ab24c898",
                "locality": "Patna Sadar",
                "areaName": "Boring Road",
                "costForTwo": "₹500 for two",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Kebabs",
                  "Mughlai",
                  "Beverages",
                  "Desserts"
                ],
                "avgRating": 4.4,
                "parentId": "1803",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 35,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "30-35 mins",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹199",
                  "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/behrouz-biryani-sadar-boring-road-patna-492412",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "707051",
                "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                "cloudinaryImageId": "b96645b1734207da9fe120af350c9dea",
                "locality": "Radha Enterprise",
                "areaName": "Kankarbagh",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Desserts",
                  "Ice Cream",
                  "Ice Cream Cakes"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "582",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 00:30:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "pureveg",
                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-radha-enterprise-kankarbagh-patna-707051",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "524423",
                "name": "La Pino'z Pizza",
                "cloudinaryImageId": "tnjwc1hltzaudqyilpzq",
                "locality": "Malahi Pakadi Chowk",
                "areaName": "Kankarbagh",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Pizzas",
                  "Pastas",
                  "Italian",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 4,
                "parentId": "4961",
                "avgRatingString": "4.0",
                "totalRatingsString": "5K+",
                "sla": {
                  "deliveryTime": 30,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-malahi-pakadi-chowk-kankarbagh-patna-524423",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "712098",
                "name": "NIC Ice Creams",
                "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
                "locality": "Hanuman Nagar",
                "areaName": "Kailash Puri Road",
                "costForTwo": "₹120 for two",
                "cuisines": [
                  "Ice Cream",
                  "Desserts"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "6249",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 26,
                  "lastMileTravel": 4.6,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "4.6 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 01:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "pureveg",
                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/nic-ice-creams-hanuman-nagar-kailash-puri-road-patna-712098",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "384886",
                "name": "The Belgian Waffle Co.",
                "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                "locality": "PC Colony",
                "areaName": "Kankarbagh",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Waffle",
                  "Desserts",
                  "Ice Cream",
                  "Beverages"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "2233",
                "avgRatingString": "4.6",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 36,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:59:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                    }
                  ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {
                  
                },
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "pureveg",
                            "imageId": "v1695133679/badges/Pure_Veg111.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-pc-colony-kankarbagh-patna-384886",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "492413",
                "name": "Faasos - Wraps, Rolls & Shawarma",
                "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                "locality": "Patna Sadar",
                "areaName": "Boring Road",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Kebabs",
                  "Fast Food",
                  "Snacks",
                  "American",
                  "Healthy Food",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "21809",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 37,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "₹125 OFF",
                  "subHeader": "ABOVE ₹199",
                  "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-sadar-boring-road-patna-492413",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "492417",
                "name": "LunchBox - Meals and Thalis",
                "cloudinaryImageId": "nylazndpe3lzotwjoahx",
                "locality": "Patna Sadar",
                "areaName": "Boring Road",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Punjabi",
                  "Healthy Food",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 4.4,
                "parentId": "4925",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 37,
                  "lastMileTravel": 5,
                  "serviceability": "SERVICEABLE",
                  "slaString": "35-40 mins",
                  "lastMileTravelString": "5.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:59:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "ITEMS",
                  "subHeader": "AT ₹159"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sadar-boring-road-patna-492417",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "682863",
                "name": "Khyati's Kitchen",
                "cloudinaryImageId": "97ac64a29439854fbcc66f9482587c13",
                "locality": "Sanjay Nagar",
                "areaName": "Kankarbagh",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Chinese",
                  "Mughlai"
                ],
                "avgRating": 4.2,
                "parentId": "407630",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 25,
                  "lastMileTravel": 1.2,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "1.2 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-08 00:00:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "OnlyOnSwiggy",
                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "40% OFF",
                  "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/khyatis-kitchen-sanjay-nagar-kankarbagh-patna-682863",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "242395",
                "name": "Ram Babu Restaurant",
                "cloudinaryImageId": "mq1vlwbzjanzdeukja3d",
                "locality": "Kankarbagh",
                "areaName": "Kankarbagh",
                "costForTwo": "₹297 for two",
                "cuisines": [
                  "Chinese",
                  "North Indian",
                  "Biryani"
                ],
                "avgRating": 4,
                "parentId": "166239",
                "avgRatingString": "4.0",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 1.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "1.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 23:30:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "10% OFF",
                  "subHeader": "UPTO ₹40"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/ram-babu-restaurant-kankarbagh-patna-242395",
                "type": "WEBLINK"
              }
            },
            {
              "info": {
                "id": "87401",
                "name": "Amrapali Cafe",
                "cloudinaryImageId": "xuzh778frvo2c8oi81d2",
                "locality": "Beer Chand Patel Marg",
                "areaName": "Fraser Road",
                "costForTwo": "₹700 for two",
                "cuisines": [
                  "North Indian",
                  "Chinese"
                ],
                "avgRating": 4.4,
                "parentId": "31959",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 27,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25-30 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2024-06-07 22:59:00",
                  "opened": true
                },
                "badges": {
                  "imageBadges": [
                    {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "Delivery!",
                            "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                          }
                        }
                      ]
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/amrapali-cafe-beer-chand-patel-marg-fraser-road-patna-87401",
                "type": "WEBLINK"
              }
            },
          ]
          
const Body =() => {
 return(
    <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {
       resList.map(restaurant => <RestaurantCard resData={restaurant} />)
      }
    </div>
    </div>
 );
};

const AppLayout = () => {
    return(
        <div className="app">
        <Header />
        <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);