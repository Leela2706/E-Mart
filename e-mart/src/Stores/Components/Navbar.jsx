import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="navSection">
                <div className="title">
                    <h2>E -Mart</h2>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search' />
                </div>
                <div className="user">
                    <div className="user-details">
                        SignIN/SignUp
                    </div>

                    <Link to='/cart'>
                        <div className="cart">
                            cart
                        </div>
                    </Link>
                </div>
            </div>
            <div className='subMenu'>
                <ul>
                    <Link to="/mobiles">
                        <li>Mobiles</li>
                    </Link>

                    <Link to="/books">
                        <li>Books</li>
                    </Link>

                    <Link to="/fridge">
                        <li>Fridge</li>
                    </Link>

                    <Link to="/speaker">
                        <li>Speaker</li>
                    </Link>

                    <Link to="/Tv">
                        <li>TV</li>
                    </Link>

                    <Link to="/computer">
                        <li>Computer</li>
                    </Link>

                    <Link to="/watch">
                        <li>Watches</li>
                    </Link>

                    <Link to="/man">
                        <li>Man Fashion</li>
                    </Link>

                    <Link to="/women">
                        <li>women Dressing</li>
                    </Link>

                    <Link to="furniture">
                        <li>Furniture</li>
                    </Link>

                    <Link to={"/ac"}>
                        <li>Ac</li>
                    </Link>

                    <Link to="/kitchen">
                        <li>Kitchen</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar
