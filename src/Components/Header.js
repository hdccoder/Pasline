import React from 'react';
import { Link } from "react-router-dom"

const Header = () => {
    const token = window.localStorage.getItem('token')

    return (
        <nav>
            <Link to='/products'>Products</Link>
            <Link to='/search'>Search</Link>
            {/* {
                token ? (
                    <span>
                        <Link to="/account">User</Link>
                    </span>
                
                ) : (
                    
                    <span>
                        <Link to="/login">Login</Link>
                        <Link to='/register'>Register</Link>
                    </span>
                )
            } */}
        </nav>
    )
}

export default Header;
