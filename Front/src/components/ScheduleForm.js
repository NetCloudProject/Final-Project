import React, { useState, useEffect } from 'react';
import './FormStyles.css'
import ShoppingList from './ShoppingList';
import axios from 'axios' ;
import ReactDOM from 'react-dom/client';



const ShoppingForm = () => {
    const [index, setIndex] = useState("");
    const [product, setProduct] = useState( "");
    const [product2, setProduct2] = useState( "");
    const [product3, setProduct3] = useState( "");
    const [product4, setProduct4] = useState( "");
    const [date, setDate] = useState( "");
    // const [shopping_list, setShoppingList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Click the Check List Button to query data`);
    }

    // function handleDateUpdate() {
    //     axios.post(`http://127.0.0.1:5011/list_update`, {
    //         id:index,
    //         date: date
    //         })
    //         .then((response) => {
    //           console.log(response);
    //         }, (error) => {
    //           console.log(error);
    //         });
    //     alert(`Shoping Date of list ${index} is updated to ${date}`)
    //     // setDate("")
    //     window.location.reload();
    // }

    function handleDelete() {
        axios.get(`http://127.0.0.1:5000/delete_schedule/${product3}`)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        alert(`Deleted ${product3} from schedule`)
        // setProduct("")
        // handleClick()
        window.location.reload();
    }

    function handleAdd() {
        // axios.post(`http://127.0.0.1:5011/product`, {
        //     id: index,
        //     name: product
        // })
        axios.get(`http://127.0.0.1:5000/add_schedule/${index}/${product}/${product2}/${product4}`
        )
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
        alert(`Added ${index} into schedule`)
        // setProduct("")
        window.location.reload();
        // handleClick()
    }

    function handleClick() {
        // axios.get("http://127.0.0.1:5021/")
        //     .then (response => {
        //         // setRows((response.data["response"]));
        //         console.log(response.data);
        //     })
      //   axios.get(`http://127.0.0.1:5021/`)
      //       .then((response) => {
      //           // console.log(response.data["response"][0]['product_name'])
      //           // console.log(response.data["response"].map((x) => x['product_name']))
      //           setShoppingList(response.data["response"].map((x) => x['product_name']))
      //           }
      //       ).catch((error) => {
      //       setShoppingList(['NOT FOUND'])
      //       }
      //   )}
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Enter schedule to add: </label>
                <label>Schedule name:</label>
            <input
                    type="string"
                    value={index}
                    onChange={(e) => setIndex(e.target.value)}
                />
            {/* <button type="button" onClick={handleClick}>
                Location
            </button> */}
            {/* <ShoppingList items={shopping_list}/> */}
            <label>Schedule start date: </label>
               <input
                    type="string"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                />
                
              {/* <button type="button" onClick={handleDelete}>
                Start Date
              </button> */}
              <label>Schedule end date: </label>

              <input
                    type="string"
                    value={product2}
                    onChange={(e) => setProduct2(e.target.value)}
                />



                <label>Schedule description: </label>

              <input
                    type="string"
                    value={product4}
                    onChange={(e) => setProduct4(e.target.value)}
                />

              <button type="button" onClick={handleAdd}>
                   Add
              </button>

                <label>Enter Schedule Index to delete: </label>
              <input
                    type="string"
                    value={product3}
                    onChange={(e) => setProduct3(e.target.value)}
                />

              <button type="button" onClick={handleDelete}>
                   Delete
              </button>
{/*               
             { shopping_list.length !== 0 &&
                 <label>Enter List Index to update shopping date: </label>
             } */}

             {/* { shopping_list.length !== 0 &&
                 <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
             } */}

             {/* { shopping_list.length !== 0 &&
                 <button type="button" onClick={handleDateUpdate}>
                Update
              </button>
             } */}



        </form>


        </div>
    )
}

export default ShoppingForm