import React, {useState, useEffect} from 'react';

const Users = () => {
    const [users, setUsers] = React.useState([]);
    const [posts, setPosts] = useState([]);
    const [loadings, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(6);
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const json = await res.json();
      setUsers(json.data);
      setLoading(false);
    };
    
    React.useEffect(() => {
      f();
    }, []);
    
 
    return (
        <div className="App">
        <h1>Hello ReqRes users!</h1>
        <div className="flex">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id}>
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img key={user.avatar} src={user.avatar} />
                </div>
              );
            })}
        </div>
      </div>
    );
};

export default Users;