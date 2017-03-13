import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login, signup} from '../actions/session_actions'

const mapStateToProps = (state, ownProps) => {
  return{
    loggedIn: Boolean(!!state.session.session.currentUser),
    errors: state.session.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname;
  const action = (formType === '/login') ? login : signup;

  return {
    action: user => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm)
