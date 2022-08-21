//props enviar funções atraves de componentes filhos para componentes pais
function Button(props){

    return <button onClick={props.event}>{props.text}</button>
}
export default Button