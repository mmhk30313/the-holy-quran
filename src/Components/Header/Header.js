import React from 'react';
import img from '../../Qimg.jpg';
import { Link } from 'react-router-dom';
const Header = () => {
    const linkStyle = {paddingTop: '15px',width: 'fit-content',margin: '0 auto',display: 'flex',textDecoration: 'none'};
    return (
        <div className="bg-dark text-center">
            <Link style={linkStyle} className=" text-success" to='/Home'>
                <img style={{width: '100px',height:'80px',position:'relative',top: '10px',borderRadius: '50%'}} src={img} alt=""/>
                <h1 style={{lineHeight: '100px',marginLeft: '10px'}}>The Holy Quran</h1>
            </Link>        
        </div>
    );
};

export default Header;