import { liveWireImg } from "../utils"


const Navbar = () => {
    return (
        <header>
            <nav>
              <img src={liveWireImg} alt="liveWire" width={300} height={100}/>
                <a href="/" className="navbar-link">LiveWire</a>
            
                <div className="navbar-item">
                    <a href="/about" className="navbar-link">MOTORCYCLES</a>
                </div>

                <div className="navbar-item">
                    <a href="/contact" className="navbar-link">EXPERIENCE</a>
                </div>
            </nav>
          </header>

      );
    }


export default Navbar
