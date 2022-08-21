function OutraLista({itens}){

    return(// <> retorna varios itens sem tag pai
        <> 
        <h3> LIsta de coisas boas:</h3>
        {itens.length > 0 ? ( //condição para verificar se tem itens na lista
            itens.map((item, index) =>(
                <p key={index}>{item}</p>//key index passa um id para os itens
            ))) : ( //else quando nao tem itens
                <p> não tem itens</p>
            )
        }
        </>
    )
}
export default OutraLista