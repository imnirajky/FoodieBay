import { IMG_CDN } from "../config";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

const Restaurant = () => {
    const params = useParams(); 
    const [menu, setMenu] = useState({});

    useEffect(() =>{
        allMenu();
    },[]);
    
    async function allMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId="+ params.id +"&submitAction=ENTER");
        const json = await data.json();
        setMenu(json.data);
    }

    return(Object.keys(menu).length === 0)?(<h2>Loading Restaurant's Menu</h2>):(
    <div className="menu">
        <div className="RestaurantDetails">
            <img src={IMG_CDN + (menu?.cards[0]?.card?.card?.info?.cloudinaryImageId)} alt="restaurant_Img" />
            <h2>{menu?.cards[0]?.card?.card?.info?.name}</h2>
            <h3>{menu?.cards[0]?.card?.card?.info?.areaName}</h3>
        </div>
        
        <div>
       {
        (menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)?.map((menuDetails) => {
        return(
        <li key={menuDetails.card.info.name}>{menuDetails.card.info.name}</li>
        );
        })
        }
        </div>
    </div>
    );
}

export default Restaurant;