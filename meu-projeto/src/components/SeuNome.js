function SeuNome({setNome}){
   
    return(
        <div>
            <p>
                <input type="text" placeholder=" Qual seu nome?" onChange={(e) => setNome(e.target.value)}/>
            </p>
        </div>
    )
}

export default SeuNome