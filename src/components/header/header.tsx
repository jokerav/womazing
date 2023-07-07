import s from './header.module.scss'
import { ReactComponent as Logo } from "img/svg/dress.svg";
import { ReactComponent as Telephone } from "img/svg/telephone.svg";
import { ReactComponent as ShopingBag } from "img/svg/shopping-bag.svg";


const Header = () => {
    return (
        <header className={s.headerContainer}>
            <div className={s.logoContainer}>
                <Logo />
                <p className={s.logoText}>Womazing</p>
            </div>
            {/*<ul className={s.menu}>*/}
            {/*    <li><a>Главная</a></li>*/}
            {/*    <li><a>Магазин</a></li>*/}
            {/*    <li><a>О бренде</a></li>*/}
            {/*    <li><a>Контакты</a></li>*/}
            {/*</ul>*/}
            <Telephone />
            <a href='tel:+380988235412'>+38 (098) 823-54-12</a>
            <ShopingBag />
        </header>)
}
export default Header