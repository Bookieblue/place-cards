import { useState, useEffect} from 'react';
import './App.css';
import download from './download.jpg';




function App() {
  const [users, setUsers] = useState([]);
  const filters = e => {
    const search = e.target.value.toLowerCase();
    const filtered = users.filter(users = users.id.toLowerCase(search))
    setUsers(filtered)
  }
  
  
 
  const getData = async () => {

      const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
      const userData = await response.json();
      
      setUsers(userData);

  };

  useEffect(() => {
    getData();
    }, [])

  

  
  return (
    <div className="App">
      <input type='text'className='search-box' placeholder='What are you looking for?' onChange={(e)=> filters(e)} />
      <div className='main-card'>
        {users.map((user, index) => (
              <div key={user.id} className='sub-card'>
              <div className='item' ><h3>{user.id}</h3></div>
              <img src={download}></img>
              <div className='item'><h4>User ID: {user.userId}</h4></div>
              <hr></hr>
              <div className='item'><h5>Title: {user.title}</h5></div>
              <div className='item'><h5>Body:  {user.body}</h5></div>
          </div>
        ))}
    </div>
  </div>
  );
}


    


export default App;
