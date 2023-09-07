import { useState } from "react";

const RegisterUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, age };

        console.log(user);
    }

    return (
        <div className = "register-user-form">
            <h2> Register </h2>
            <form onSubmit = {handleSubmit}>
                <div className="user-entry">
                    <label>Name: </label>
                    <input
                    type="text"
                    required
                    value = {name}
                    onChange = {(e) => {setName(e.target.value)}}
                    />
                </div>

                <div className="user-entry">
                    <label>Email: </label>
                    <input
                    type="email"
                    required
                    value = {email}
                    onChange = {(e) => {setEmail(e.target.value)}}
                    />
                </div>

                <div className="user-entry">
                    <label>Age (years): </label>
                    <input
                    type="number"
                    required
                    value = {age}
                    onChange = {(e) => {setAge(e.target.value)}}
                    />
                </div>

                <button className="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default RegisterUser;