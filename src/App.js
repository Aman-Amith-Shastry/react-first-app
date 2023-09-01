import NavBar from './Navbar';
import Users from './Users';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';

function App() {

  const [num, setNum] = useState(Math.random);
  const title = "Hello!";
  // const [blogs, setBlogs] = useState([
  //   {title: "Blog 1", body: "Loren ipsum 1", id: 1},
  //   {title: "Blog 2", body: "Loren ipsum 2", id: 2},
  //   {title: "Blog 3", body: "Loren ipsum 3", id: 3},
  // ]);


  const {data, isPending, error, setData} = useFetch('http://localhost:8000/data');

  const handleDelete = (id) => {
    const newUsers = data.filter((user) => user.id !== id);
    setData(newUsers);
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/data').then(
  //       res => {
  //         if (!res.ok){
  //           throw Error("Could not fetch data");
  //         }
  //         return res.json();
  //       }
  //     ).then(
  //       (data) => {
  //         setUsers(data);
  //         setIsPending(false);
  //         setError(null);
  //       }
  //     )
  //     .catch((err) => {
  //       setError(err.message);
  //       setIsPending(false);
  //     })
  // }, 1000);
  // }, []);

  return (

    <div className="App">
      <NavBar />
      <div className = "content">
        <h1> { title } </h1>
        <p> { num } </p>
        <button onClick = {() => {setNum(Math.random)}}> Generate random number! </button>
      </div>
    
    { error && <div className = "err"> { error } </div>}
    { isPending && <div> Loading... </div>}
    { data && <Users users = {data} handleDelete = {handleDelete}/> }
      
    </div>
  );
}

export default App;
