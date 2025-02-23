import styles from './style.module.css'
import Photo from '../../../assets/pexels-olly-733872.jpg'
export default function cards() {
    return (
        <section className={styles.header}>
            <div className={styles.user}>
            <img className={styles.pfp} src={Photo} alt="foto-olly-feedback" />
            <div className={styles.infoUser}>
                <h3>Thaís Gomes</h3>
                <p>Designer</p>
            </div>
            </div>
            <p>Publicado há 1 hora</p>
        </section>

    )

}