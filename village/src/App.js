import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  addSmurf = (newSmurf) => {
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
          this.setState({ smurfs : response.data })
        })
        .catch(err => {
          console.log(err)
        })

    this.props.history.push('/')
  }

  deleteSmurf = (id) => {
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(reponse => {
          this.setState({ smurfs : reponse.data })
        })
        .catch(err => {
          console.log(err)
        })

    this.props.history.push('/')
  }

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
