import { Link } from "react-router-dom";

const Users = ({users, handleDelete}) => {

    return (
        <div className = "users">
            {users.map((user) => (
            <div className = "preview" key = { user.id }>
                <Link to = {`/user/${user.id}`} className = "user-list">
                    <h2 className = "user-name">Name: { user.name }</h2>
                    <h3>Id: { user.id }</h3>
                </Link>
                <button onClick={() => handleDelete( user.id )}> Delete user </button>
            </div>
            ))}
        </div>
    );
}
 
export default Users;