import React from "react";
import ProfileSettings from "./ProfileSettings";
import ProfileDetails from "./ProfileDetails";
import { Link, Routes, Route } from "react-router-dom";

function Profile() {
    return (
        <div>
            <h2>Profile</h2>
            <ul>
                <li>
                    <Link to="details">Profile details</Link> |{" "}
                    <Link to="settings">Profile settings</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<h3>Please select an option.</h3>} />
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}

export default Profile;
