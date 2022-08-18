import propTypes from 'prop-types' //biblioteca para reconhecer os parametros props

import Item from "./Item"

function List(){
    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            
            <Item marca="Ferrari" ano_lancamento={1995}/>
            <Item marca="Fiat" ano_lancamento={1996}/>
        </ul>
        </>
    )
}

Item.prototype = {// definindo o tipo das variaveis
    marca: propTypes.string.isRequired, 
    ano_lancamento: propTypes.number,
}

Item.defaultProps ={//verificação dos campos
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default List