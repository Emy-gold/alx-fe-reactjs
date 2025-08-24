import React from 'react';
import ProfileSettings from './ProfileSettings';
import ProfileDetails from './ProfileDetails';
import { BrowserRouter as Route, Link, Switch, useRouteMatch } from 'react-router-dom';

function Profile() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <h2>Profile</h2>
            <ul>
                <li>
                    <Link to={`${url}/details`}>Profile details</Link>
                    <Link to={`${url}/settings`}>Profile settings</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select an option.</h3>
                </Route>
                <Route path={`${path}/details`}>
                    <ProfileDetails />
                </Route>
                <Route path={`${path}/settings`}>
                    <ProfileSettings />
                </Route>
            </Switch>
        </div>
    )
}

export default Profile