import Button from "./evento/Button";

function Evento(){  //componente evento
   
    function meuEvento(){ //componente que retorna a ação do botao
        console.log("Ativando");
    }

 return(
        <div>
            <p> Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
          
        </div>
    )
}
 // <button onClick={meuEvento}>Ativar!</button>
export default Evento