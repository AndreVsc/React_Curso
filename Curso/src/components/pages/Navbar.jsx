import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
export default function Navbar(){
    return(
        <nav id={styles.navContainer}>
            <ul id={styles.listaContainer}> 
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Users">Usuários</Link>
                </li>
                <li>
                <Link to="/Contact">Contato</Link>
                </li>
            </ul>
        </nav>
    )
}