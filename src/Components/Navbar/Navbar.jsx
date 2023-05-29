import { Link } from "react-router-dom";

const Navbar = () => {
    
    const items = <>
        <li className="text-2xl mr-2"><Link to='/book'>সু উপদেশ গীত</Link></li>
        <li className="text-2xl mx-2"> <Link to='/about'>দরবার সম্পর্কে</Link> </li>
    </>
    return (
        <div className="navbar bg-black fixed text-white bg-opacity-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content  bg-black rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"> <Link to='/'>মির্জাখীল  দরবার শরীফ</Link></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;