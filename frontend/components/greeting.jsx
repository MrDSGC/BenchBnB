import React from 'react';
import {Link} from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {currentUser} = this.props
    if(!currentUser) {
      return (
        <div>
          <Link to={`/signup`}>signup</Link>
          <Link to={`/login`}>login</Link>
        </div>
      )
    }

    return(
      <div>
        <h1>Welome {currentUser}!</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    )
  }
}

export default Greeting;
