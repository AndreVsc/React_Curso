import styles from './TipoLista.module.css'
import TipoItem from './TipoItem';
export default function TipoLista(){
    return(
        <div id={styles.tituloLista}>
            <h1>Lista com Tipos</h1>
            <ul id={styles.listaContainer}>
                <TipoItem marca='Fiat' ano_lancamento={1998}/>
                <TipoItem marca='Ferrari' ano_lancamento={1987}/>
                <TipoItem marca='Chevrolet' ano_lancamento={1973}/>
                <TipoItem />
            </ul>
        </div>
    )
}

// <TipoLista />