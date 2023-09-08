import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
export default function Footer(){
    return(
        <footer id={styles.footerCon}>
            <ul id={styles.Container_social}>
                <li><FaFacebook></FaFacebook></li>
                <li><FaInstagram></FaInstagram></li>
                <li><FaLinkedin></FaLinkedin></li>
            </ul>
        </footer>
    )
}