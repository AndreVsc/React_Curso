export default function ChildNomeado({setSeuNome}){
    return(
        <div>
            <p>Nome:</p>
            <input type="text" placeholder="Digite seu nome" onChange={(e)=> setSeuNome(e.target.value)}/>
        </div>
    )
}

//  <ChildNomeador setSeuNome={setSeuNome}/>
