import { useState } from 'react'

function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault() //nao permite o envio do formulario
        //console.log('testandoooo')
        setUserEmail(email)
        console.log(userEmail)
    }
    function limparEmail(){
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail &&( //condição que verifica se o email é verdadeiro
                    <div>
                        <p> o email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional