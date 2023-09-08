import {useState} from 'react'
export default function Condicional(){
    
    const [email,setEmail] = useState();
    const [emailTest,setEmailTest] = useState();

    function enviarEmail(e){
        e.preventDefault();
        setEmailTest(email);
        console.log(emailTest);
    }

    function limparEmail(){
        setEmailTest();
    }

    return(
        <div>
            <h2>Cadastrar-se</h2>
            <form onSubmit={enviarEmail}>
                <input type="email" placeholder='Digite seu email'  onChange={(e) => setEmail(e.target.value)}/>
                <div>
                    <button type="submit" >Enviar</button>
                </div>
            </form>
                {emailTest && ( 
                    <div>
                        <p>O email do usuário é: {emailTest}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
        </div>
    )
}

//  <Condicional />