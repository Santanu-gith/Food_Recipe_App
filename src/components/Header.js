import React from 'react';


const Header = (props) => {
  return (
    <>
    <div className="jumbotron">
      <h1 className='display-1'>
       <span className="material-symbols-outlined brand-icon"> lunch_dining </span>
         Food Items</h1>

         <div className="input-group mb-3 w-50 mx-auto">
  <input type="text" className="form-control" value={props.search}
  onChange={props.onInputchng}
  placeholder="Search your Food recipies" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  
  <div className="input-group-append">
    <button className='btn btn-danger' onClick={props.onSearchclick}> Search</button>
  </div>
</div> 
        </div>
    </>
  )
}

export default Header