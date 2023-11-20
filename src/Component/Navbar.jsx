import { Link } from "react-router-dom"
import myProfilePic from "../assets/pro-2.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faEnvelope, faMobile, faPalette, faPhone, faUser } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-slate-700">
                <div className="flex-1">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost">
                            <FontAwesomeIcon icon={faBars} className="text-white text-2xl hover:text-orange-500 hover:transition-all duration-500 ease-in-out" />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/service">Services</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="mr-5 btn btn-ghost">
                            <div className="indicator">
                                <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl hover:text-orange-500 hover:transition-all duration-500 ease-in-out" />
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">sr.bd.911@gmail.com</span>
                                <span className="text-info">01303182929</span>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={myProfilePic} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/work">Work</Link></li>
                            <li><Link to="/service">Services</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar