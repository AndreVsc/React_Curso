function Nome(){
    const name = 'Matheus' , newName = name.toUpperCase();

    function soma(a,b){
        return a + b;
    }

    const url = 'https://via.placeholder.com/150';

    return(
        <div className="App">
            <h2>Alterando JSX</h2>
            <p>Olá , {newName} !</p>
            <p>Soma: {2 + 2}</p>
            <p>Soma: {soma(2,2)}</p>
            <img src={url} alt="Imagem" />
        </div>

    )
}

// <Nome />

export default Nome;