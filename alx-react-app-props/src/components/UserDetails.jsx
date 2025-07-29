<<<<<<< HEAD
import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

=======
import { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
    const userData = useContext(UserContext);

    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
        </div>
    );
}

>>>>>>> bd83420 (Initial clean commit without env file)
export default UserDetails;