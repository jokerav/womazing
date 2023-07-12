import s from './hero.module.scss'
import {ReactComponent as Arrow} from "img/svg/arrow.svg";

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.titleWrapper}>
                <h1 className={s.heroTitle}>Новые поступления в этом сезоне</h1>
                <p className={s.heroSubTitle}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом
                    сезоне. Время исследовать.</p>
                <div className={s.btnWrapper}>
                    <div className={s.arrowBtn}><Arrow/></div>
                    <button className={s.openShopBtn}>Открыть магазин</button>
                </div>
            </div>
        </section>
    )
}
export default Hero;