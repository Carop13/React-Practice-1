import React from 'react';
import Dashboard from './dashboard.jsx';
import Home from './home/home.jsx';
import Contact from './contact/contact.jsx';
import About from './about/about.jsx';

export default {

  path: '/dashboard',

  children: [
  	{
  	  path: '/',	
  	  async action(context) {
  	    return {
  	      title: 'Home',
  	      component:<Dashboard context={context}> 
                      <Home /> 
                    </Dashboard>
  	    };
  	  },
  	},
    {
      path: '/contact',
      async action(context) {
        return {
          title: 'Contact',
          component: <Dashboard context={context}>
                      <Contact />
                    </Dashboard>,
        };
      },
    },
    {
      path: '/about',
      async action(context) {
        return {
          title: 'About',
          component: <Dashboard context={context}>
                      <About />
                    </Dashboard>,
        };
      },
    }
  ],

};
