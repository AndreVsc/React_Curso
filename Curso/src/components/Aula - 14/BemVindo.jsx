export default function BemVindo({seuNome}){
    // return <div><p>Bem vindo! {seuNome}</p></div>
    return <>{seuNome && <p>Olá, {seuNome} tudo bem?</p>}</>
}

//  <BemVindo seuNome={seuNome}/>
