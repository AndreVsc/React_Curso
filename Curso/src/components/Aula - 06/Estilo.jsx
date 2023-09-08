import styles from './Estilo.module.css'

function Estilo(){
    return(
        <div id={styles.fraseContainer}>
            <p>Está é apenas uma frase simples em um componente!</p>
        </div>
    )
}

// <Frase />

export default Estilo;