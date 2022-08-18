/*function Item(props){ utilizando props
    return(
        <>
        <li>{props.marca}</li>
        </>
    )
}

export default Item*/

function Item({marca, ano_lancamento}){  //passando o objeto
    return(
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

export default Item