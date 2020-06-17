import React from 'react';
import * as convertFunctions from '../../util/convertor_util';
import MeetupCityRow from './parts/meetup_city_row';

// location: [], // [lat, lng, name of venue, address, city, state/province, zip, country]

//Something is coming off wrong for React, 
// says this is an object instead of the function 
// that react wants.


class AllMeetups extends React.Component { 
    constructor(props){
        super(props)

    }

// Probably need this because otherwise meetups prop is null
// With user, once you're logged in, state will always have your info on hand until logout
// With meetups, not so much.

    componentDidMount() {
        this.props.fetchMeetups();
        if(this.props.currentUser){
            this.props.fetchUser(this.props.currentUser.id);
        }
    }

    componentDidUpdate(prevProps){
      if(this.props.currentUser && (this.props.meetups.length != prevProps.meetups.length)){
        this.props.fetchMeetups(this.props.currentUser.id);
      }
    }

    meetupsNearUser(homeCityCell,homebase){
        if(this.props.currentUser){
            if(homeCityCell){
                return(
                    <div className="meetups">
                        <h3>Upcoming meetups near you</h3>
                        <MeetupCityRow metro={homeCityCell} key="0" currentUser={this.props.currentUser.id}/>
                    </div>
                )
            }
            else{
                return(
                    <div className="nearby_meetups">
                        <h3>Upcoming meetups near you</h3>
                        <p>Looks like no one is hosting in your area.¯\_(ツ)_/¯ <br/> You could host one!<br/><br/></p>
                    </div>
                )
            }
        }
    }

    meetupLabel(){
        if(this.props.currentUser){
            return(
                <h3>Upcoming meetups everywhere else</h3>
            )
        } else {
            return(
                <h3>All upcoming meetups</h3>
            )
        }

    }

    render() {
        const currentUser = this.props.currentUser;
        const currentUserId = this.props.currentUserId;
        const metroArr0 = convertFunctions.orgMeetupsIntoMetroes(Array.from(this.props.meetups));

        console.log(metroArr0);
        let homebase = "";
        let homeCityMeetups = "";
        if(currentUser){homebase = currentUser.home_city;}
        const metroArr = convertFunctions.quickSortCities(metroArr0, homebase);

        if((metroArr.length > 0) && (homebase === metroArr[0].name)){homeCityMeetups = metroArr.shift()}
        const hostCreateMeetup = ((currentUserId && currentUser.host_status === true)? <a href="#/meetups/new">Let's create and host a new Meetup</a> : "")
        
        console.log(metroArr);
        console.log(homeCityMeetups);
        return (
            <div className="meetup_index">
                <div className="meetup-index-header">
                    <p className="show-header">SOLID FRIENDSHIPS</p>
                    <p className="show-header">They're here to stay.</p>
                    {hostCreateMeetup}
                </div>
                <div className="meetups">
                    {this.meetupsNearUser(homeCityMeetups, homebase)}
                    <div className="meetups">
                        {this.meetupLabel()}
                        {metroArr.map (metro =>
                            <MeetupCityRow metro={metro} key={metroArr.indexOf(metro)} currentUser={currentUserId}/>
                        )}

                        {/* FUTURE: ALLOW FOR SEARCHING BY CITY */}
                        {/* Meetups */}
                        {/* <MeetupCityRow city={city} meetups={meetups}> */}
                    </div>
                </div>
            </div>
        )
    }  
}

export default AllMeetups;