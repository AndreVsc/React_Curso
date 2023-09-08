import Item from './Item';
import styles from  './List.module.css'
function List(){
    return(
        <>
            <h1 id={styles.tituloLista}>Lista de componente</h1>
            <ul id={styles.listaContainer}>
                <li>Item 1</li> 
                <li>Item 2</li> 
                <Item num={3}/>
            </ul>
        </>
    )
}

//  <Lista />

export default List;