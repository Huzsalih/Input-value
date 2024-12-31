import React, { useState } from "react";

function Form(){
    const [formData, setFormData] = useState({name:"", email:""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value})
    };

    return(
        <div>
            <input
            type = "text"
            name = "name"
            value = {formData.name}
            placeholder = "Name"
            />

            <input
            type = "email"
            name = "email"
            value = {formData.email}
            placeholder="Email"
             /> 

             <p>Name:{formData.name}</p>
             <p>Email:{formData.email}</p>
        </div>
    );
}

export default Form