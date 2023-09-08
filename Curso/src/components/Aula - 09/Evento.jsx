export default function Evento({numero}) {

    function ativar(){
        console.log(`Ativado ${numero}`);
    }

    return(
        <>
            <h1>Teste evento</h1>
            <p>Ativador de evento</p>
            <button onClick={ativar}>Ativar</button>
        </>
    )
}

// <Evento numero={3} />