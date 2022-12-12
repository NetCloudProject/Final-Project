import React, { useState, useEffect } from 'react';
import './FormStyles.css'
import ShoppingList from './ShoppingList';
import axios from 'axios' ;



const ShoppingForm = () => {
    const [shopping_list, setShoppingList] = useState([]);
    const [shopping_id, setShoppingListID] = useState('');
    const [shopping_location, setShoppingLocation] = useState('');

    // const [shopping_information, setShoppingInformation] = useState([]);

    const getShoppingListRequest = async() => {
        const url = "http://127.0.0.1:5011/shopping_list";
        await axios.get(url).then (response => {

            console.log(response);
            setShoppingListID(response.data["response"]["list_id"]);
            
            var pieces = response.data["response"]["item_list"].split(";");
            console.log(pieces);
            setShoppingList(pieces);
            
            setShoppingLocation(response.data["response"]["shopping_location"]);
        })
    }

    useEffect(() => {
        getShoppingListRequest();
        // console.log(shopping_list);
      }, []);


    return (
        <div className='form'>
            <div>
                <p> Show results </p>
            </div>
                <div>
                <ShoppingList items={shopping_list}/>
                {/* <p>{shopping_list}</p> */}
                <p>{shopping_id}</p>
                <p>{shopping_location}</p>
                </div>
        </div>
    )
}

export default ShoppingForm