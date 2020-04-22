import { connect } from 'react-redux';
import MeetupIndexItem from './meetup_index_item';
import { attendMeetup, unattendMeetup, requestSingleMeetup } from '../../actions/meetup_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {    // That's it? For joining?
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => (
    { // fetch, join, cancel meetup
        attendMeetup: (meetupId) => dispatch(attendMeetup(meetupId)),
        unattendMeetup: (meetupId) => dispatch(unattendMeetup(meetupId)),
        requestSingleMeetup: (meetupId) => dispatch(requestSingleMeetup(meetupId))
    }
)


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeetupIndexItem));
