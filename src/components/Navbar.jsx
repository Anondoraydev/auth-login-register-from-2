import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const heandelLogout = () => {
        logOut()
            .then(() => console.log('User logOut successfully'))
            .catch(error => console.error(error))

    }

    const navlink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/orders'}>Orders</NavLink></li>
        {user &&
            <>
                <li><NavLink to={'/profile'}>Profile</NavLink></li>
                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>

            </>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            {navlink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">

                    {/* stap 1 */}

                    {/* {
                        user && <span>{user.email}</span>  
                    } */}

                    {/* or */}

                    {
                        user ? <>
                            <span>{user.email}</span>
                            <a onClick={heandelLogout} className="btn  btn-sm">Sing out</a>
                        </>
                            : <Link to={'/login'}>
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }

                    {/* step 1 */}

                    {/* <a onClick={heandelLogout} className="btn  btn-sm">Sing out</a> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;