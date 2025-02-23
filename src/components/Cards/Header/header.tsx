import styles from './style.module.css'
import Photo from '../../../assets/pexels-olly-733872.jpg'
export default function cards() {
    return (
        <section className={styles.card}>
            <div className={styles.header}>
                <div className={styles.profile}>
                    <img src={Photo} alt="foto-olly-feedback" />
                    <h3>Thaís Gomes</h3>
                    <p>Designer</p>
                </div>
                <p>Publicado há 1 hora</p>
            </div>
        </section>

    )

}