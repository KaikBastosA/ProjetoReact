import Header from './Header/header'
import styles from './style.module.css'
import Body from './Body/body'
export default function cards() {
    return (
        <section className={styles.card}>
            <Header/>
            <Body/>
        </section>
    )
}