import Users from './Users';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

const Body = () => {

    const [num, setNum] = useState(Math.random);
    const title = "Hello!";
  
    const {data: blogs, isPending, error, setData} = useFetch('http://localhost:8000/data');
  
    const handleDelete = (id) => {
      const newUsers = blogs.filter((user) => user.id !== id);
      setData(newUsers);
    }

    return(
        <div className = "content">
            <h1> { title } </h1>
            <p> { num } </p>

        { error && <div className = "err"> { error } </div>}
        { isPending && <div> Loading... </div>}
        { blogs && <Users users = {blogs} handleDelete = {handleDelete}/> }
        
        </div>
    );
}

export default Body;