import React from "react";
import { Link } from "react-router-dom";
export class Navbar extends React.Component{
    render(){
        return(
            <header className='header'>
            <Link className='logo'>BUILDY</Link>
            <div className='navbar'>
                <Link to="/" className='navbars'>Home</Link>
                <Link to="/blog" className='navbars'>Blog</Link>
                <Link to="/client" className='navbars'>Client</Link>
                <Link to="/service"className='navbars'>Service</Link>
                <Link to="/aboutus" className='navbars'>About Us</Link>
                <Link to="/contactus" className='navbars'id='contactus'>Contact Us</Link>
            </div>
        </header>
        );
    };
};