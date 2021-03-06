// const express = require("express");
// import express from 'express';
// const app = express();
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// SignIn, SignUp pages
import SignUpFormContainer from './session_form/signup_form_container';
import SignInFormContainer from './session_form/signin_form_container';

// Profile pages
import ProfileContainer from './profile_pages/profile_container';
import EditProfileContainer from './profile_pages/edit_profile_container';
import HistoryContainer from './profile_pages/history_container';
import HostShowContainer from './profile_pages/host_show_container';
import EditPasswordContainer from './profile_pages/edit_password_container';

// Meetup pages
import MeetUpIndexContainer from './meetup_pages/all_meetups_container'; // Shows index of all meetups
import MeetUpShowContainer from './meetup_pages/meetup_container'; // Shows details of each meetup
import NewMeetUpContainer from './meetup_pages/new_meetup_container';
import EditMeetUpContainer from './meetup_pages/edit_meetup_container';

// Non-changing pages
import Home from './basic/home';
import About from './basic/about';
import HostingContainer from './basic/hosting_container';
import Terms from './basic/terms';
import Disclaimer from './basic/disclaimer';
import BadPage from './basic/oops';


//Header, footer
import { Header, Footer } from './moulding.jsx';

import { AuthRoute, ProtectedRoute, HostRoute, AdminRoute } from '../util/route_util';

import { clearMessage } from '../actions/message_actions';

// app.use(passport.initialize());
// require("./config/passport")(passport);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use("/users", users);
// app.use("/rooms", rooms);

// const users = require("./routes/api/users");
// const rooms = require("./routes/api/rooms");

const App = () => {
  // useEffect(() => {
  //       return () => {
  //           clearMessage()
  //       }
  // }, [])
  return(
  <div id="whole-page">
    <Header />
    <div id="main_content">

      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/hosting" component={HostingContainer} />
          {/* <Route exact path="/terms" component={Terms} /> */}
          <Route exact path="/disclaimer" component={Disclaimer} />

          <AuthRoute exact path="/signin" component={SignInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />

          <ProtectedRoute path="/password-change" component={EditPasswordContainer} />
          <ProtectedRoute path="/profile/edit" component={EditProfileContainer} />
          <ProtectedRoute path="/profile/history" component={HistoryContainer} />
          <ProtectedRoute path="/profile" component={ProfileContainer} />

          <Route exact path="/host/:hostId" component={HostShowContainer} />

          {/* Host only routes, for creating meetups */}
          <HostRoute exact path="/meetups/new" component={NewMeetUpContainer} />
          <HostRoute exact path="/meetups/:meetupId/edit" component={EditMeetUpContainer} />

          <Route exact path="/meetups/:meetupId" component={MeetUpShowContainer} />
          <Route exact path="/meetups" component={MeetUpIndexContainer} />


          
          <Route to="/oops" component={BadPage} />
      </Switch>
    </div>
    <Footer />
  </div>
)};

export default App;
