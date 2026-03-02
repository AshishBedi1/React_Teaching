// import React, { useState, useEffect } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);      // store API data
//   const [loading, setLoading] = useState(true); // loading state
//   const [error, setError] = useState(null);     // error state

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError("Something went wrong!");
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>{error}</h2>;

//   return (
//     <div>
//       <h2>User List</h2>
//       {users.map((user) => (
//         <div key={user.id}>
//           <p>{user.name}</p>
//           <p>{user.email}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Users;


import React, { useState, useEffect } from "react";
const UseEffect = () => {
    const [name, setName] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setName(data);
            setLoading(false);
        })    

        .catch((err) => {
            setError("Something went wrong!");
            setLoading(false);  
        })

  },[]);
      

    return(
        <div>
            <h2>User List</h2>
            {loading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}

            {name.map((users) => (
                <div key={users.id}>
                    <p>{users.name}</p>
                    <p>{users.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UseEffect;