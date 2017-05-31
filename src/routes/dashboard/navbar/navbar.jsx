
import React from 'react';
import styles from '../dashboard.css';
import Link from '../../../components/Link';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import {Button, IconButton} from 'react-toolbox/lib/button';
import FontIcon from 'react-toolbox/lib/font_icon';
import history from '../../../history';

class Navbar extends React.Component {

  goHome = (event) => {
  	 event.preventDefault();
  	 history.push({
      pathname: '/dashboard',
      state: this.props.data
    });
  };	

  render() {
    return (
      <AppBar title={`Hello ${this.props.data.login}`} rightIcon={<FontIcon value='home' />} onRightIconClick={this.goHome}>
	    <Navigation type='horizontal' className={styles.navbar}>
		    <Link to='/dashboard/about' {...this.props}><Button icon='library_books' label='About' flat /></Link>
		    <Link to='/dashboard/contact' {...this.props}><Button icon='email' label='Contact Us' flat /></Link>
	    </Navigation>
	  </AppBar>
    );
  }
}

export default Navbar;
