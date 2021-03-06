import { RECEIVE_CURRENT_USER, SIGNOUT_CURRENT_USER, CLOSE_USER_ACCOUNT } from '../actions/session_actions';
import { RECEIVE_MEETUP, MEETUP_CANCELLED } from '../actions/meetup_actions';
import { RECEIVE_MESSAGE, CLEAR_MESSAGE } from '../actions/message_actions';

  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return(action.currentUser.message ? action.currentUser.message : "");
      case SIGNOUT_CURRENT_USER:
        return "You've been successfully logged out";
      case CLOSE_USER_ACCOUNT:
        return "Thanks for using Kapiteh Times";

      case RECEIVE_MEETUP:
        return(action.meetup.message ? action.meetup.message : "");
      case MEETUP_CANCELLED:
        return "Meetup successfully cancelled";

      case CLEAR_MESSAGE:
        return "";
      default:
        return state;
    }
  };
  