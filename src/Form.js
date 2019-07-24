import React, { useState } from 'react';




function Form() { 
const [data, setData] = useState( "" );
return(
 <form>
     <fieldset>
         <legend>Form</legend>
         <div>
         Employee Name
         <div className="name-field">
             <input 
             type="text"
             name="name"
             placeholder="Please enter your name"
             
             />
         </div>
         Email address
         <div className="email-field">
             <input 
             type="text"
             name="email"
             placeholder="Enter email"
             
             />
         </div>
         Role
         <div className="role-field">
             <input 
             type="text"
             name="role"
             placeholder="What is youre role?"
             
             />
         </div>
         </div>
         <button type="submit" className="submit-btn">
             Submit
         </button>
     </fieldset>
 </form>
)

}
export default Form;