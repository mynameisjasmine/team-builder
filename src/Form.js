import React, { useState } from 'react';




function Form() { 
const [data, setData] = useState({ name: "", email: "", role: ""});


function changeEvent(event) {
    const userData = { ...data, [event.target.name]: event.target.value };
    console.log("changeEvent", event.target.name, event.target.value, userData);
    setData(userData);
}

function handleEvent(event) {
 event.preventDefault();
 console.log('Data:', data);

}


return(
 <form onSubmit={handleEvent}> 
     <fieldset>
         <legend>Form</legend>
         <div>
         Employee Name
         <div className="name-field">
             <input 
             type="text"
             name="name"
             placeholder="Please enter your name"
             value={data.name}
             onChange={changeEvent}
             
             />
         </div>
         Email address
         <div className="email-field">
             <input 
             type="email"
             name="email"
             placeholder="Enter email"
             value={data.email}
             onChange={changeEvent}
             
             />
         </div>
         Role
         <div className="role-field">
             <input 
             type="text"
             name="role"
             placeholder="What is your role?"
             value={data.role}
             onChange={changeEvent}
             
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