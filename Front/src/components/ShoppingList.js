import React from 'react';
// import './MovieList.css';
// import '../Urls';
/**
 * MovieList: Create MovieList for different genres and search results. 
 */
const ShoppingList = (props) =>{
    // console.log(props)
 return (
  <>
      {props.items.map((item, index) => (
            <div key = {index} style = {{fontSize:20, color: 'white', textAlign: "center"}}> {item}
            <input id="btnSubmit" type="button" value="Delete"  display='none' visibility="hidden" />
            </div>
        ))}
  </>
 );
};

export default ShoppingList;
 