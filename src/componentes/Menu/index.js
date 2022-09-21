import './menu.css';
import {BsYoutube, BsLinkedin} from 'react-icons/bs'
import { Link} from 'react-router-dom'

export default function Menu(){
    return(
        <div className="menu">
            <a className="social" href="https://youtu.be/vVbHZyHgt7o?list=PLAF5G8rnMmBZQRlBfg6pHIQCXaGcQ8Z2v">
                <BsYoutube color='#FFF' size={24}/>
            </a>
            <a className="social" href="https://www.linkedin.com/in/endriw-braga/">
                <BsLinkedin color='#FFF' size={24}/>
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    )
}