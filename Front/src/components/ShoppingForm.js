import React, { useState, useEffect } from 'react';
import './FormStyles.css'
import ShoppingList from './ShoppingList';
import axios from 'axios' ;
import ReactDOM from 'react-dom/client';



const ShoppingForm = () => {
    const [index, setIndex] = useState("");
    const [product, setProduct] = useState( "");
    const [date, setDate] = useState( "");
    const [shopping_list, setShoppingList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Click the Check List Button to query data`);
    }

    function handleDateUpdate() {
        axios.post(`http://10.126.212.167:5011/list_update`, {
            id:index,
            date: date
            })
            .then((response) => {
              console.log(response);
            }, (error) => {
              console.log(error);
            });
        alert(`Shoping Date of list ${index} is updated to ${date}`)
        handleClick()
    }

    function handleDelete() {
        axios.delete(`http://10.126.212.167:5011/product`, { data:{
            id: index,
            name: product
        }})
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        alert(`Deleted ${product} from ${index} shopping list`)
        handleClick()
    }

    function handleAdd() {
        axios.post(`http://10.126.212.167:5011/product`, {
            id: index,
            name: product
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        alert(`Added ${product} into ${index} shopping list`)
        handleClick()
    }

    function handleClick() {
        axios.get(`http://10.126.212.167:5011/show_product/${index}`)
            .then((response) => {
                // console.log(response.data["response"][0]['product_name'])
                // console.log(response.data["response"].map((x) => x['product_name']))
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
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                />
            <button type="button" onClick={handleClick}>
                Check List
            </button>
            <ShoppingList items={shopping_list}/>
            {shopping_list.length !== 0  &&
               <input
                    type="string"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
            }
            { shopping_list.length !== 0 && shopping_list[0] !== "NOT FOUND" &&
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
             }

             { shopping_list.length !== 0 &&
              <button type="button" onClick={handleAdd}>
                Add
              </button>
             }
             { shopping_list.length !== 0 &&
                 <label>Enter List Index to update shopping date: </label>
             }

             { shopping_list.length !== 0 &&
                 <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
             }

             { shopping_list.length !== 0 &&
                 <button type="button" onClick={handleDateUpdate}>
                Update
              </button>
             }



        </form>


        </div>
    )
}

export default ShoppingForm