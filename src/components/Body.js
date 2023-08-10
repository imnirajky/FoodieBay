import { useState } from 'react';
import { RestaurantList } from '../config';
import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from 'react';

const Body = () => {
    const [searchText, setSearchText] = useState();// to create state variable
    const [filterRestaurant, setfilterRestaurant] = useState([]);// to create state variable
    const [allRestaurants, setAllRestaurants] = useState([]);
    
    function cards_RestaurantList(searchText){
        const list_of_search_restaurants = allRestaurants.filter(name => name.data.name.toLowerCase().includes((searchText).toLowerCase()));
        setfilterRestaurant(list_of_search_restaurants);
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setfilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json);
    }

    return(allRestaurants.length === 0)?(<h2>Loading Restaurants</h2>):(
        <>
        <div className="search-container">
            <input 
            type="text"
            className="search-input"
            placeholder='Search Restaurant'
            value = {searchText}            onChange = {(e) => {
                setSearchText(e.target.value);
            }}/>
            
            <button 
            className="search-btn"
            onClick = {() => {
                cards_RestaurantList(searchText);
            }}> Search </button>

        </div>
        {
        (filterRestaurant.length === 0) ? (<h2>Restaurant Not Found!!!</h2>):
        (
        <div className="restaurant-list">
        {
        filterRestaurant.map((Restaurant) => <RestaurantCard {...Restaurant.data} key={Restaurant.data.id}/>)
        }
        </div>)
        }
        </>
    );
};

export default Body;