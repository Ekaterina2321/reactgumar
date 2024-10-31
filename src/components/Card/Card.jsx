import { useState } from 'react'
import { OrderModal } from '../OrderModal/OrderModal'
import s from './Card.module.css'
import item from '/item.png'
import { Link } from 'react-router-dom'

export function Card({ id, image = 'https://avatars.mds.yandex.net/i?id=d8f9a38bd02e776c3ded5755bbf7451830bfd702-10159322-images-thumbs&n=13', name = 'tovar', desc = 'описание', price = '100', count = '' }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function showModal() {
        setModalIsOpen(true);
    }
    return (
        <>

            <div className={s.item}>
                <img src={image} alt="" />

                <h3>{name}</h3>

                <div className={s.price__btn}>
                    <p><span>{price}</span> ₽</p>
                    {
                        count > 0 ?
                            <Link className={s.active} to={`${id}`}>Подробнее</Link>
                            :
                            <button onClick={showModal} className={s.btn__order}>Заказать</button>
                    }
                </div>
                <OrderModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />

            </div>
        </>
    )
}