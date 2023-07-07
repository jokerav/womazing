import s from './header.module.scss'
import {ReactComponent as Logo}  from "../../img/svg/dress.svg";

const Header = () => {
    return (
        <header>
        <Logo/>
        <p className={s.logoText}>Womazing</p>
            </header>)
        }
export default Header