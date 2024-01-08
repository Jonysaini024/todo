import React, { useContext, useRef, useState } from 'react';
import AuthContext from './AuthContext';
import { useEffect } from 'react';

function Register(props) {

    const {register, message,setMessage } = useContext(AuthContext);
    const [formData, setFormData] = useState([]);
    const inputField = useRef(null);
    // errors and  dirty states to manage errors
    const [errors, setErrors] = useState({
        email: [],
        name: [],
        password:[]
    });
    const [dirty, setDirty] = useState({
        email: false,
        name: false,
        password:false
    });

// function  for validating the inputs

    const validate = () => {
        let errorsData = {};
        errorsData.email = [];
        errorsData.password = [];
        errorsData.name = [];
    
    //email
        if (!formData.email) {
            errorsData.email.push("please enter vailed email");
        }
        let emailreg = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
        if (!formData.email) {
            if (!emailreg.test(formData.email)) {
                errorsData.email.push("please provide email")
            }
        }
        // name
        if (!formData.name) {
            errorsData.name.push("please enter vailed name");
        }
        // password
        if (!formData.password) {
            errorsData.password.push("please enter vailed password");
        }
        setErrors(errorsData);
    }
    
    // useEffect(validate, [formData]);


    // const isValid = () => {
    //     let valid = ture;
    //     for (let control in errors) {
    //         if (errors[control].length > 0) {
    //             valid = false;
    //         }
    //         return valid;
    //     }
    // }
    useEffect(validate, [formData]);

    const isValid = () => {
        let valid = true;
        for (let control in errors) {
            if (errors[control].length > 0) {
                valid = false;
            }
        }
        return valid;
    }





    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // const submitForm = async (e) => {
    //     e.preventDefault();
    //     //fetch
    //     const config = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(formData)
    //     }

    //     const checkUser = await fetch(` http://localhost:5000/users?email=${formData.email}`, { method: "GET" });
    //     if (checkUser.ok) {
    //         const user = await checkUser.json();
    //         if (user.length > 0) {
    //             setMessage("user already exist");
    //         }
    //         else {
    //             const response = await fetch(` http://localhost:5000/users`, config);
    //             console.log(response);
    //             if (response.status === 201) {
    //                 const user = await response.json();
    //                 setMessage("Resgistered Successfully");
    //                 localStorage.setItem("todoUser", JSON.stringify(user))
    //             } else {
    //                 setMessage("Something went wrong");
    //             }
    //         }
    //     }else {
    //     setMessage("something went wrong pls try again")
    // }
    // }

    const onblurHandle = (e) => {
        const { name } = e.target;
        setDirty((dirty) => ({
            ...dirty,
            [name]:true
        }))
        validate();
    }
    


    const submitForm = (e) => {
        e.preventDefault();
       
        debugger
        if (isValid()) {
            register(formData);
        } else {
            const currValue = inputField.current.value;
            if (!currValue) {
                Object.keys(dirty).forEach((abc) => dirty[abc] = true)
            }
            setMessage("Please resolve errors in the form");
        }
    }
    // const submitForm = (e) => {
    //     e.preventDefault();
    //     if (isValid()) {
    //         register(formData);
    //     } else {
    //         const currvalue = inputField.current.value;
    //         if (!currvalue) {
    //             object.keys(dirty).forEach((abc)=>dirty[abc]=true)
    //         }
    //         setMessage("please resolve the errors in the form");
    //     }
    //     // register(formData);
    // }

    useEffect(() => {
        setMessage("");
    },[])


return (
    <form>
        <div className='mb-3'>
            <label className='form-label'>Name</label>
            <input ref={inputField} type="text" className='form-control' name='name' onChange={handlechange} onBlur={onblurHandle} />
            <div className="text-danger">{dirty["name"]&& errors["name"][0]? errors["name"]:"" }</div>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input ref={inputField} type="email" className='form-control' name='email' onChange={handlechange} onBlur={onblurHandle} />
            <div className="text-danger">{dirty["email"]&& errors["email"][0]? errors["email"]:"" }</div>
        </div>
        <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input ref={inputField} type="password" className='form-control' name='password' onChange={handlechange} onBlur={onblurHandle} />
            <div className="text-danger">{dirty["password"]&& errors["password"][0]? errors["password"]:"" }</div>
        </div>
        {message}
        <button className='btn btn-primary' onClick={submitForm}>Register</button>
    </form>
);
}

export default Register;