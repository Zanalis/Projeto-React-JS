import { useState } from 'react' // import hook useState

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //para o envio do formulário para o servidor
       console.log("O usuário cadastrado tem nome: " + name + "e a senha: " + password)
        // console.log(name)
        //console.log("Cadastrou")
    }

    const [name, setName] = useState() // criando constantes nome
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)} //o que for digitado aqui será alterado no state //está atribuindo o valor para a const name
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="text" 
                    id="password" 
                    name="password"
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form