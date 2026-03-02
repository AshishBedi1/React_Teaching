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