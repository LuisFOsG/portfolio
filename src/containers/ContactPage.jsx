import Navigation from './../components/Navigation';
import Profile from './../components/Profile';
import Contact from './../components/Contact';

function ContactPage(props) {
  return (
    <div>
        <Navigation lang = { props.lang } cambiarLenguaje = { props.cambiarLenguaje } />
        <br/><br/><br/><br/>
        <Profile lang = { props.lang }/>
        <br/>
        <Contact lang = { props.lang }/>
    </div>
  );
}

export default ContactPage;
