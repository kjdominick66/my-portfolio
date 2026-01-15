import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}
export default Layout;