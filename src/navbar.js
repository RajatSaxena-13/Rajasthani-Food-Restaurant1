import React from 'react'

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark shadow p-3 rounded">
            <div className="container-fluid">
                {/* <img src={image} className="rounded-thumbnail rounded-circle navbar-brand1" alt="Responsive image" width="5%"></img> */}
                <Link to="/homebody"><a className="navbar-brand text-danger neonText" href="#">Rajasthani Food</a></Link>
                <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation ">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/homebody" className="mylink"><a className="nav-link text-white" href="storybody">Home</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/storybody" className="mylink"><a className="nav-link text-white" href="storybody">Story</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menubody" className="mylink"><a className="nav-link text-white" href="storybody">Menu</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menulistbody" className="mylink"><a className="nav-link text-white" href="storybody">Menu - List</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/orderbody" className="mylink"><a className="nav-link text-white" href="storybody">Order</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ourupdate" className="mylink"><a className="nav-link text-white" href="storybody">Our Update</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contactbody" className="mylink"><a className="nav-link text-white" href="storybody">Contact</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login"><a className="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</a></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/signup" className='mylink'><a className="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal3">SignUp</a></Link> 
                        </li> */}
                        <li className="nav-item">
                            <Link to="/register" className='mylink'><a className="nav-link text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal1">Register</a></Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/cart" className="mylink"><a className="nav-link text-white" href="storybody">Cart</a></Link>
                        </li> */}
                        <li className="nav-item">
                            <button className='btn btn-warning button ' data-bs-toggle="modal" data-bs-target="#exampleModal2">Reservation</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
