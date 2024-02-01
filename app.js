import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';
import './styles.css'; // Import the styles

class App extends React.Component {
  render() {
    const { dogs } = this.props;

    return (
      <div>
        {/* Render Nav component with dogs' names passed as props */}
        <Nav dogs={dogs} />

        {/* Render Switch with Route declarations */}
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} /> {/* Pass dogs data to DogList */}
          </Route>
          <Route path="/dogs/:name">
            <DogDetails dogs={dogs} /> {/* Pass dogs data to DogDetails */}
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </div>
    );
  }
}

// Set defaultProps for convenience
App.defaultProps = {
  dogs: [
    // Dogs data as you provided
  ]
};

export default App;
