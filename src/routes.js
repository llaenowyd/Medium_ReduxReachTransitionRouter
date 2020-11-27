import Calendar from './Calendar'
import UserNameForm from './UserNameForm'

export default {
  calendar: { pathname: 'calendar', view: Calendar },
  userNameForm: { pathname: 'userNameForm', view: UserNameForm },
  default: { pathname: 'default', view: UserNameForm }
};
