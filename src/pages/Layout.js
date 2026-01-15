import { Outlet, Link } from "react-router-dom";
import './Layout.css';

function Layout(){
    return(
        <div>
            <nav className="navbar">
                <ul>
                    <li><Link to="/"><span>Home</span></Link></li>
                    <li><Link to="/about"><span>About Me</span></Link></li>
                    <li><Link to="/projects"><span>Projects</span></Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}
export default Layout;