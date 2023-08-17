import { useState } from "react";
import validation from "./validations/validation";

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email:"",
        password:""
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleInputChange}/>
            {errors.email && <p>{errors.email}</p>}
            <br /><br />
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
            {errors.password && <p>{errors.password}</p>}
            <br /><br />
            <button>Login</button>
        </form>
    )
}

export default Form;