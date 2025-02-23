import styles from './style.module.css'
import Foto from '../../assets/fotoEu.jpg'

export default function perfil() {
    return (
        <div className={styles.profile}>
            <img className={styles.photo} src={Foto} alt="Foto de perfil" />
            <div className={styles.info}>
                <h1>Kaik Bastos</h1>
                <h2>Desenvolvedor Front-End</h2>
            </div>
        </div>
    )
}