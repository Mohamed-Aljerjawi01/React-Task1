import { Link } from 'react-router-dom';
import styleNavbar from'./navbar.module.css'

function Navbar(){
    // JS COde 
    // console.log(style);

    // HTML Code 
    return <>
        <div className={`${styleNavbar.header}`}>
            <div>
                <Link className={styleNavbar.link} to={'/'}><h1>Start Bootstrap</h1></Link>
            </div>
            <div>
                <ul className={styleNavbar.nav}>
                    <li><Link to={'/portfolio'}>Portfolio</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </div>
    </>
}

export default Navbar;