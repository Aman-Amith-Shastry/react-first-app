import Users from './Users';
import { useState} from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Body = () => {

    const [num, setNum] = useState(Math.random);
    const title = "Home page!";
  
    const {data: data, isPending, error, setData} = useFetch('http://localhost:8000/data');
  
    const handleDelete = (id) => {
      const newUsers = data.filter((user) => user.id !== id);
      setData(newUsers);
    }

    return(
        <div className = "body">
            <h1> { title } </h1>
            <p> { num } </p>
            <p>
                <Link to = "/register"> New? Register here! </Link>
            </p>

            { error && <div className = "err"> { error } </div>}
            { isPending && <div> Loading... </div>}
            { data && <Users users = {data} handleDelete = {handleDelete}/> }
        
        </div>
    );
}

export default Body;