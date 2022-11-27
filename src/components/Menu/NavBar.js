import './NavBar.css';
import ContactUs from './../contact-us/ContactUs';

function contactUs(){
    return(
        <ContactUs></ContactUs>
    );
}

function NavBar() {
    return (
        <div className="topnav">
            <a className='active' href='/'>Home</a>
            <a href='/'>Services</a>
            <a href='/'>News</a>
            <a href='/contact-us' onClick={contactUs}>ContactUs</a>
            <a href=''>AboutUs</a>
        </div>
    );
}

export default NavBar;
