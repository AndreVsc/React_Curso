import PropTypes from 'prop-types';
export default function TipoItem({marca,ano_lancamento}){
    return(
        <>
             <li>{marca} - {ano_lancamento}</li>
        </>
    )    
}

//  <TipoItem marca='Fiat' ano_lancamento={1998}/>

TipoItem.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
};

TipoItem.defaultProps = {
    marca: 'N/a',
    ano_lancamento: 0,
};

