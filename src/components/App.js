import React, { Component } from 'react';
import styles from './app.css';

class App extends Component {
  render() {
    return ( <div className={styles.app}> {React.Children.only(this.props.children)} </div>);
  }
}

export default App;

