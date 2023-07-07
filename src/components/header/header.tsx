import s from './header.module.scss'
import {ReactComponent as Logo} from "img/svg/dress.svg";
import {ReactComponent as Telephone} from "img/svg/telephone.svg";
import {ReactComponent as ShopingBag} from "img/svg/shopping-bag.svg";


const Header = () => {
    return (
        <header className={s.headerContainer}>
            <div className={s.logoContainer}>
                <Logo className={s.logoIcon}/>
                <p className={s.logoText}>Womazing</p>
            </div>
            <ul className={s.menu}>
                <li className={s.menuItem}><a href='##'>Главная</a></li>
                <li className={s.menuItem}><a href='##'>Магазин</a></li>
                <li className={s.menuItem}><a href='##'>О бренде</a></li>
                <li className={s.menuItem}><a href='##'>Контакты</a></li>
            </ul>
            <div className={s.phoneContainer}>
                <Telephone className={s.phoneIcon}/>
                <a href='tel:+380988235412'>+38 (098) 823-54-12</a>
            </div>
            <ShopingBag/>
        </header>)
}
export default Header