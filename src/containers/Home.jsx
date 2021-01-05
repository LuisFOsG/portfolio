import React from 'react';

import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import About from './../components/About';
import Proyectos from './Proyectos';


class Home extends React.Component {

  render() {
    let props = this.props;

    return(
      <div>
        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <br/><br/><br/><br/><br/>
        <Profile lang = { props.lang } />
        <br/><br/><br/><br/><br/><br/>
        <About lang = { props.lang } />
        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Proyectos lang = { props.lang } />
        <br/><br/><br/><br/><br/>
        Get In Touch
        <br/><br/>
    </div>
    );
  }
}

export default Home;
