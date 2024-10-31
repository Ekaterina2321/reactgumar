import { Accordeon } from "../../components/Accordeon/Accordeon";
import { Banner } from "../../components/Banner/Banner";
import { SliderElem } from "../../components/SliderElem/SliderElem";
import s from './HomePage.module.css'

export function HomePage() {
    return (
        <section className={s.background}>
            <Banner />

            <div className={s.section}>
                <h2>Популярные товары</h2>

                <SliderElem/>
            </div>

            <Accordeon/>
        </section>
    )
}