import React from 'react';
// import './MovieList.css';
// import '../Urls';
/**
 * MovieList: Create MovieList for different genres and search results. 
 */
const ShoppingList = (props) =>{
    // console.log(props)

 function handleDelete(event) {
  alert("You hit the button")
  console.log()
 }

 return (
  <>
      {props.items.map((item, index) => (
            <div key = {index} style = {{fontSize:20, color: 'white', textAlign: "center"}}> {item}

            </div>
        ))}
  </>
 );
};

export default ShoppingList;
 