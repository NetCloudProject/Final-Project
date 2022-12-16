import React, { useState, useEffect } from 'react';
import './FormStyles.css'
import ShoppingList from './ShoppingList';
import axios from 'axios' ;
import ReactDOM from 'react-dom/client';



const ShoppingForm = () => {
    const [name, setName] = useState("");
    const [shopping_list, setShoppingList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Click the Check List Button to query data`);
    }

    function handleClick() {
        axios.get(`http://192.168.1.106:5011/show_product/${name}`)
            .then((response) => {
                // console.log(response.data["response"][0]['product_name'])
                console.log(response.data["response"].map((x) => x['product_name']))
                setShoppingList(response.data["response"].map((x) => x['product_name']))
                }
            ).catch((error) => {
            setShoppingList(['NOT FOUND'])
            }
        )}
    return (

        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter List Index to check details: </label>
            <input
                    type="number"
                    min = "1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            <button type="button" onClick={handleClick}>
                Check List
            </button>
        </form>
        <ShoppingList items={shopping_list}/>
        </div>
    )
}

export default ShoppingForm