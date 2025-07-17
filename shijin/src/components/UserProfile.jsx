import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid green', padding: '15px', margin: '10px' }}>
      <h2>👤 Global User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
    </div>
  );
}

export default UserProfile;
