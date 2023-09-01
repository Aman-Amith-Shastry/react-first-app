const Users = ({users, handleDelete}) => {

    return (
        <div className = "users">
            {users.map((user) => (
            <div className = "preview" key = { user.id }>
                <h2>Name: { user.name }</h2>
                <h3>Id: { user.id }</h3>
                <button onClick={() => handleDelete( user.id )}> Delete user </button>
            </div>
            ))}
        </div>
    );
}
 
export default Users;