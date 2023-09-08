import NovaLista from "./NovaLista"
export default function ListaRend(){

    const meusItens = ['React','Vue','node']

    return(
        <div>
            <h1>Renderização das Listas</h1>
            <NovaLista itens={meusItens}/>
            <NovaLista itens={[]}/>
        </div>
    )

}

//  <ListaRend />