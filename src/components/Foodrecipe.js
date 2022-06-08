import React, {useState} from 'react';
import axios from 'axios';


const Foodrecipe = (props) => {
    
  // val.recipe.label 
  return (
    
     <div className="row">
       {
         props.recipes.map((val)=>{
          return(
            <div className="col-md-3">
              <div className="card py-2 text-center">
                <img src={val.recipe.image} className="img-fluid w-50 mx-auto rounded-circle " />
                <div className="card-body">
                  <h6>{val.recipe.label}</h6>
                </div>
                <div><p>{val.recipe.cuisineType}</p></div>
                <ul className='list-group'>
                  {
                    val.recipe.ingredientLines.map((ingred)=>{
                      return (<li className='list-group-item'>{ingred}</li>)
                    })
                  }
                </ul>
              </div>
            </div>
          )
         })
       }
     </div>
    
    )
}

export default Foodrecipe
