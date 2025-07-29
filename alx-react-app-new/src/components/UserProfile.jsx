<<<<<<< HEAD
import React from 'react';

function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
=======
import React from 'react';

function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'green' }}>{props.age}</span></p>
            <p>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
>>>>>>> bd83420 (Initial clean commit without env file)
