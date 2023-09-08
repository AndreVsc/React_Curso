import Botao from './Botao'
export default function EventoBotao() {

    function ativar(){
        console.log(`Ativado `);
    }

    function evento(){
        console.log(`Ativado `);
    }

    return(
        <>
            <h1>Teste evento</h1>
            <p>Ativador de evento</p>
            <Botao event={evento} text="Primeiro Evento"/>
            <button onClick={ativar}>Ativar</button>
        </>
    )
}

// <Evento numero={3} />