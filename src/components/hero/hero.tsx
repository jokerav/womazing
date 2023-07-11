import s from './hero.module.scss'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.titleWrapper}>
                <h1 className={s.heroTitle}>Новые поступления в этом сезоне</h1>
                <p className={s.heroSubTitle}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом
                    сезоне. Время исследовать.</p>
            </div>
        </section>
    )
}
export default Hero;