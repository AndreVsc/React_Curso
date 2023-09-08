import styles from './Form.module.css';
export default function Form(){
    
    function cadastrarNome(e){
        e.preventDefault()
        console.log("Cadastro bem sucedido!")
    }

    return(
        <div id={styles.alinhar}>
            <h1>Meu Cadastro</h1>
            <form id={styles.formContainer} onSubmit={cadastrarNome}>
                <input type="text" placeholder="Nome" />
                <input type="password" placeholder="Senha" />
                <div id={styles.submitForm}>
                    <input id={styles.submit} type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}