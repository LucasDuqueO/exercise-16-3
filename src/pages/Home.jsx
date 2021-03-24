import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() { 
    return (
      <main>
        <h1>Home</h1>
        <Link to="/login">Login</Link>
      </main>
    );
  }
}
 
export default Home;
