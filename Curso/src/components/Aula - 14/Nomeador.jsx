import {useState} from 'react';
import ChildNomeador from './ChildNomeador';
import BemVindo from './BemVindo';
export default function Nomeador(){
    const [seuNome , setSeuNome] = useState();

    return(
        <div>
            <h1>State Lift</h1>
            <ChildNomeador setSeuNome={setSeuNome}/>
            <BemVindo seuNome={seuNome}/>
        </div>
    )
}

//  <Nomeador />