import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div>
            <nav className="navbar">
                <Link to="/"><span>Home</span></Link>
                <Link to="/about"><span>About Me</span></Link>
                <Link to="/projects"><span>Projects</span></Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
export default Layout;