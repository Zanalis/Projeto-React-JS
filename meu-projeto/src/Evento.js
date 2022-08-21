function Evento({ numero }){  //componente evento
   
    function meuEvento(){ //componente que retorna a ação do botao
        console.log("Opa, fui ativado! ${numero} "); //propriedade numero
    }

 return(
        <div>
            <p> Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento