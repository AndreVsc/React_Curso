function Pessoa({nome,idade,profissao,foto}){
    return(
        <>
            <img src={foto} alt={nome} />
            <p>Nome: {nome} </p>
            <p>Idade: {idade} </p>
            <p>Profissao: {profissao} </p>
        </>
    )
}

//  <Pessoa nome='Andre' idade={19} profissao="programador" foto="https://via.placeholder.com/150"/>

export default Pessoa;