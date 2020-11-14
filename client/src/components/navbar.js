import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authentication";

function Navbar() {
    const authentication = useSelector(state => state.authentication);
    const dispatch = useDispatch();
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-md navbar-light bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {(authentication.isAuthenticated && authentication.user && authentication.user.admin) ? (
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/users">Users</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/deadline">DeadLine</Link>
                                </li>
                            </ul>
                        ) : (
                                <></>
                            )}
                        {!authentication.isAuthenticated ? (
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signup">SignUp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">SignIn</Link>
                                </li>
                            </ul>
                        ) : (
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/candidate_chairman">Gudoomiye</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/candidate_vice_chairman">Gudoomiye K.xigeen</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signin" onClick={() => dispatch(logout())}>Log out</Link>
                                    </li>
                                </ul>
                            )}

                    </div>


                </div>
            </nav>
        </div>
    )
}

export default Navbar;