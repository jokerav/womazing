import s from './newCollection.module.scss'
import Container from "../container/container";
import collectionPhoto1 from "img/new_collection/brooke.jpg"
import collectionPhoto2 from "img/new_collection/christopher-campbell.jpg"
import collectionPhoto3 from "img/new_collection/ben-eaton.jpg"


const newCollection = () => {
    return (
        <section className={s.newCollection}>
            <Container>
                <h2 className={s.newCollection_title}>Новая коллекция</h2>
                <ul className={s.newCollection_list}>
                    <li className={s.newCollection_item}>
                        <a className={s.newCollection_link} href='##'>
                            <div className={s.newCollection_cadr}>
                                <img src={collectionPhoto1} className={s.newCollection_photo} alt="poiu"/>
                                <p className={s.newCollection_card_title}>Футболка USA</p>
                                <p className={s.newCollection_card_price}></p>
                            </div>
                        </a>
                    </li>
                    <li className={s.newCollection_item}>
                        <a className={s.newCollection_link} href='##'>
                            <div className={s.newCollection_cadr}>
                                <img src={collectionPhoto2} className={s.newCollection_photo} alt="poiu"/>
                                <p className={s.newCollection_card_title}>Купальник Glow</p>
                                <p className={s.newCollection_card_price}></p>
                            </div>
                        </a>
                    </li>
                    <li className={s.newCollection_item}>
                        <a className={s.newCollection_link} href='##'>
                            <div className={s.newCollection_cadr}>
                                <img src={collectionPhoto3} className={s.newCollection_photo} alt="poiu"/>
                                <p className={s.newCollection_card_title}>Свитшот Sweet Shot</p>
                                <p className={s.newCollection_card_price}></p>
                            </div>
                        </a>
                    </li>
                </ul>
                <button>Открыть магазин</button>

            </Container>
        </section>
    )
}
export default newCollection