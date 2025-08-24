import { Routes, Route, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails.jsx';
import ProfileSettings from './ProfileSettings.jsx';

function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <nav>
                <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
            </nav>

            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>

            <Outlet /> {/* Renders nested route components */}
        </div>
    );
}

export default Profile;

