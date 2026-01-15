import { Outlet, Link } from "react-router-dom";

function Layout(){
    return(
        <>
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/About">About Me</Link>
                <Link to="/Projects">Projects</Link>
            </nav>
            {}
            <Outlet />
        </>
    );
}
export default Layout;