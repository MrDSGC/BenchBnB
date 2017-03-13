import {connect} from 'react-redux'
import Greeting from './greeting'
import * as Actions from '../actions/session_actions'


const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(Actions.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
