import React, { useContext } from 'react';
import logo from '../../../src/images/Logo.svg'
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const handleLogout=()=>{
        logout()
        .then(()=>{console.log('Signout done')})
        .catch(e=>{})
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='anchors'>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                {user && <span className='text-red-600 mr-5'>{user.email}</span>}
                <Link to="/login">Login</Link>
                {
                    user? <Link onClick={handleLogout} to="/login">Logout</Link>:<Link onClick={handleLogout} to="/signup">Sign Up</Link>
                }
                
            </div>
        </div>
    );
};

export default Header;