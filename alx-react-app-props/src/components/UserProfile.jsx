<<<<<<< HEAD
import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}

=======
import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
        </div>
    );
}

>>>>>>> bd83420 (Initial clean commit without env file)
export default UserProfile;