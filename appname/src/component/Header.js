
import "./style.css"
import logo from "../asset/screen.png"
import { Link } from "react-router-dom"
import { useState } from "react";




function Header() {


    const [sidebar, setSidebar] = useState()
    


    return(
        <header>
            <nav>
                <div>
                    <div className="nav-logo">
                        <img className="logo-img" src={logo} alt="" />
                        <span className="logo-text">
                            <strong>LAREMAY</strong>
                            <span className="logo-sub">Exchange</span>
                        </span>
                    </div>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/" className="nav-link first">Home</Link></li>
                        <li><Link to="/" className="nav-link first">Buy Crypto</Link></li>
                        <li><Link to="/" className="nav-link first">Sell Crypto</Link></li>
                        <li><Link to="/" className="nav-link first">About</Link></li>
                        <li><Link to="/" className="nav-link first">How It Works</Link></li>
                    </ul>
                </div>
                <div className="log-in">
                    <h5 className="log-in-links">Log In</h5>
                    <div className="log-in-links"><button>Get Started</button></div> 
                    <div className="menu" onClick={() => setSidebar(!sidebar)}>{sidebar ? (<span><svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#000000"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></span>) : (<span><svg xmlns="http://www.w3.org/2000/svg" height="26px"  viewBox="0 -960 960 960" width="26px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></span>)}</div>
                </div>
            </nav>
            <div className={sidebar ? "nav-overlay open" : "nav-overlay"}>
                <nav className="side-nav">
                    <ul>
                        <li><a href="#home" className={"home" ? "active" : ""}>Home</a></li>
                        <li><a href="#about"  className={"about" ? "active" : ""} >About Me</a></li>
                        <li><a href="#work" className={"work" ? "active" : ""}>Work</a></li>
                        <li><a href="#contact" className={"contact" ? "active" : ""}>Contact</a></li>
                        <li className="log-in-link"><a href="#contact" className={"contact" ? "active" : ""}>Log In</a></li>
                        <li className="log-in-link"><button>Get Started</button></li>
                    </ul>
                    
                </nav>
            </div>
        </header>
    )
}

export default Header