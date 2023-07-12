import s from './header.module.scss'
import {ReactComponent as Logo} from "img/svg/dress.svg";
import {ReactComponent as Telephone} from "img/svg/telephone.svg";
import {ReactComponent as ShopingBag} from "img/svg/shopping-bag.svg";
import Container from "../container/container";

const Header = () => {
    return (
        <header className={s.headerStiсkyContainer}>
            <Container>
                <div className={s.headerContainer}>
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
                        <div className={s.iconWrapper}>
                            <Telephone className={s.phoneIcon}/>
                        </div>
                        <a href='tel:+380988235412' className={s.phoneNumber}>+7 (495) 823-54-12</a>
                    </div>
                    <ShopingBag/>
                </div>
            </Container>
        </header>
    )
}
export default Header