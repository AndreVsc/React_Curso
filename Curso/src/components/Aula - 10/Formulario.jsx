import {useState} from 'react';
import styles from './Formulario.module.css';

export default function Formulario(){
    
    const [name , setName] = useState();
    const [pass , setPass] = useState();

    function cadastrarNome(e){
        e.preventDefault();
        console.log('Usuario: '+name);
        console.log('Senha: '+pass);
        console.log("Cadastro bem sucedido!");
    }

    return(
        <div id={styles.alinhar}>
            <h1>Meu Cadastro</h1>
            <form id={styles.formContainer} onSubmit={cadastrarNome}>
                <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(e) => setPass(e.target.value)} />
                <div id={styles.submitForm}>
                    <input id={styles.submit} type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

//  <Formulario />