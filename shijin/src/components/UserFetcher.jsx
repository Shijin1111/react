import { useEffect, useState } from 'react';

function UserFetcher() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate 2-second delay
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <div style={{ border: '1px solid green', padding: '15px', margin: '10px' }}>
      <h2>User List</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserFetcher;
