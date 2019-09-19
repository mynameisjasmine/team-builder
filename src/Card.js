import React from 'react';


function Card(props) {

    return (
   <>
   <div className="card-div">
   <h2>name:{props.name}</h2> 
   <h3> email:{props.email}</h3>
    <h4>role:{props.role}</h4>
   </div>
   </>
    )
}
export default Card;