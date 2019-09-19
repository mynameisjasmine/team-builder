import React, { useState } from 'react';





function Form(props) { 
const [data, setData] = useState({ name: "", email: "", role: ""});



function changeEvent(event) {
    const userData = { ...data, [event.target.name]: event.target.value };
    console.log("changeEvent", event.target.name, event.target.value, userData);
    setData(userData);
}

function handleEvent(event) {
 event.preventDefault();
props.addUser(data)
 setData({name: "", email: "", role: ""})
 console.log('Data:', data);

}


return(

    
 <form onSubmit={handleEvent}> 
     <fieldset>
         
         <div>
         <label htmlFor="name">Employee Name</label>
         <div className="name-field">
         
             <input 
             id="name"
             type="text"
             name="name"
             placeholder="Please enter your name"
             value={data.name}
             onChange={changeEvent}
             
             />
         </div>
         <label htmlFor="email">Email address</label>
         <div className="email-field">
             <input 
             id="email"
             type="email"
             name="email"
             placeholder="Enter email"
             value={data.email}
             onChange={changeEvent}
             
             />
         </div>
         <label htmlFor="role">Role</label>
         <div className="role-field">
             <input 
             id="role"
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