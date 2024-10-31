import s from './OrderModal.module.css'
import Modal from 'react-modal'

export function OrderModal({ modalIsOpen, setModalIsOpen }) {
    function closeModal() {
        setModalIsOpen(false);
    }
    return (
        <>
            <Modal className={s.modal} isOpen={modalIsOpen}>
                <h3>Оформление заказа</h3>
                <form className={s.form}>
                    <div className={s.label__input}>
                        <label>Имя*</label>
                        <input type="text" placeholder='введите имя' />
                    </div>
                    <div className={s.label__input}>
                        <label>Email*</label>
                        <input type="text" placeholder='введите email' />
                    </div>
                    <div className={s.label__input}>
                        <label>Номер телефона*</label>
                        <input type="text" placeholder='введите номер телефона' />
                    </div>
                
                    <button className={s.arrange}>Оформить</button>
                </form>
                <button onClick={closeModal} className={s.btn}>✕</button>
            </Modal>
        </>
    )
}