import { useState } from "react";
// import { useHistory } from "react-router-dom";

const RegisterUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    const [success, setSuccess] = useState(false);
    const [isPending, setIsPending] = useState(false);
    // const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, email, age };

        setIsPending(true);

        fetch('http://localhost:8000/data', {
            method: "POST",
            headers: {"Content-Type": "application/json"}, // Type of content being sent- json file
            body: JSON.stringify(user) // Actual content is the JSON stringified object returned from the user object
        }).then(() => {
            setSuccess(true);
            setIsPending(false);
        })
    }

    return (
        <div className = "register-user-form">

            <div className="register-status">
                { success && (
                    <div className="success-message"> Successfully registered! </div>
                )}

            </div>
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

                { !isPending && <button className = "submit">Submit</button>}
                { isPending && <button className = "submit" disabled>Registering...</button>}
            </form>
        </div>
    );
}
 
export default RegisterUser;