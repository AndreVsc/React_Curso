export default function Botao(props){
    return(
        <div>
            <button onClick={props.event}>{props.text}</button>
        </div>
    )
}

//  <Botao event={evento} text="Primeiro Evento"/>