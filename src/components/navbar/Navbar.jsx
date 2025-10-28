import styleNavbar from'./navbar.module.css'

function Navbar(){
    // JS COde 
    // console.log(style);

    // HTML Code 
    return <>
        <div className={`${styleNavbar.header}`}>
            <div>
                <h1>Start Bootstrap</h1>
            </div>
            <div>
                <ul className={styleNavbar.nav}>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </>
}

export default Navbar;