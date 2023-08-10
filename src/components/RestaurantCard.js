import { Link } from 'react-router-dom';
import {IMG_CDN} from '../config.js';

const RestaurantCard = ({cloudinaryImageId, name, area, cuisines, avgRating, id}) =>{
    return(
        <Link to={"/restaurant/" + id}>
        <div className="RestaurantCard">
            <img className="logo" src={IMG_CDN+cloudinaryImageId} alt="Restaurant_logo" />
            <h2>{name}</h2>
            <h3>{area}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
        </div>
        </Link>
    );
}

export default RestaurantCard;
