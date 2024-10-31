import s from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'

export function Accordeon() {
    return (
        <div className={s.accordeon__block}>
            <div className={s.accordeon}>
                <AccordeonItem title='Вопрос 1' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aperiam architecto. Ad, ratione laborum? Sunt voluptates doloribus rerum eius eligendi.' />
                <AccordeonItem title='Вопрос 2' content='Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Которое грамматики однажды рекламных заголовок свой! Вопрос большой предложения назад!' />
                <AccordeonItem title='Вопрос 3' content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, aperiam architecto. Ad, ratione laborum? Sunt voluptates doloribus rerum eius eligendi.' />
                <AccordeonItem title='Вопрос 4' content='Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Которое грамматики однажды рекламных заголовок свой! Вопрос большой предложения назад!' />
            </div>
        </div>

    )
}