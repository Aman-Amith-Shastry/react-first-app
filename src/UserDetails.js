import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UserDetails = () => {

    const { id } = useParams();
    const {data: user_data, isPending, error, setData} = useFetch('http://localhost:8000/data/' + id);

    return (
        <div className="user-details">
            <h2>User details- {id} </h2>
            { isPending && <div>Loading ...</div> }
            { error && <div> {error} </div>}
            {user_data && <div> {user_data.hobby} </div>}
        </div>
    );
}
 
export default UserDetails;