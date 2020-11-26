import { createUseStyles } from 'react-jss'

import Calendar from './Calendar';
import UserNameForm from './UserNameForm';

const routesConfig = {
  calendar: { pathname: 'calendar', view: Calendar },
  userNameForm: { pathname: 'userNameForm', view: UserNameForm },
  default: { pathname: 'default', view: UserNameForm }
};

export const useSlideInTransitionGroup = createUseStyles({
  enter: {
    position: 'absolute',
    overflow: 'hidden',
    transform: 'translateX(100%)'
  },
  enterActive: {
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    transform: 'translateX(0%)',
    transition: 'transform 500ms ease-in-out'
  },
  enterDone: {
  },
  exit: {
    overflow: 'hidden',
    transform: 'translateX(0%)'
  },
  exitActive: {
    overflow: 'hidden',
    transform: 'translateX(-100%)',
    transition: 'transform 500ms ease-in-out'
  },
  exitDone: {
  }
});

export default routesConfig;
