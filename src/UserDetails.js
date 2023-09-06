import { useParams } from "react-router-dom";

const UserDetails = () => {

    const { id } = useParams();
    return (
        <div className="user-details">
            <h2>User details- {id} </h2>
        </div>
    );
}
 
export default UserDetails;