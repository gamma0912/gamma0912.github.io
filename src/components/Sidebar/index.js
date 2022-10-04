import { Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png' //TODO: change this to own logo
import LogoSubtitle from '../../assets/images/logo_sub.png' //TODO: change this to own name

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to = '/'>
            <img src = {LogoS} alt = "logo" />
            <img className = "sub-logo" src = {LogoSubtitle} alt = "slobodan" />
        </Link>
    </div>
)

export default Sidebar