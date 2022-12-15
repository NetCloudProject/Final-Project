import React, { useState, useEffect } from 'react';
import './FormStyles.css'
import ShoppingList from './ShoppingList';
import axios from 'axios' ;


// const ShoppingForm = () => {
//     return (
//         <div>
//             <StickyHeadTable/>
//         </div>
//     )
//
// }
// export default ShoppingForm



const ShoppingForm = () => {
    const [shopping_list, setShoppingList] = useState([]);
    const [shopping_id, setShoppingListID] = useState([]);
    const [shopping_location, setShoppingLocation] = useState([]);

    // const [shopping_information, setShoppingInformation] = useState([]);

    const getShoppingListRequest = async() => {
        // const url = "http://192.168.1.106:5011/show_list";
        // await axios.get(url).then (response => {
        //
        //     for (let index = 0; index < response.data['response'].length; index ++ ) {
        //         console.log("Start here")
        //         console.log(response.data["response"][index])
        //         console.log(response.data["response"][index]["list_id"])
        //         console.log(response.data["response"][index]["shopping_date"])
        //         console.log(response.data["response"][index]["shopping_location"])
        //     }
        // })
    }

    // useEffect(() => {
    //     getShoppingListRequest();
    //     // console.log(shopping_list);
    //   }, []);


    return (
        <div className='ShoppingList'>
            <div>
                {/*<p> Show results </p>*/}
            </div>
                <div>
                <ShoppingList items={shopping_list}/>
                 <p>{shopping_list}</p>
                <p>{shopping_id}</p>
                <p>{shopping_location}</p>
                </div>
        </div>
    )
}

export default ShoppingForm