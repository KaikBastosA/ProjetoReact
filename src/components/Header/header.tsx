import styles from './style.module.css'
import logo from '../../assets/Logo_IN.svg'

export default function header() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.logo}><img src={logo} alt="Logo-INJunior" /></div>
            <h1>Feed</h1>
        </header>
    )
}