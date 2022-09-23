import React, {useState} from 'react';

const Contador = () =>{

    const [contador, setContador] = useState(0);

    function modificarContador(operacion) {
        if(operacion == "+"){
            setContador(contador + 1)//contador = contador +1 
        }
        else{
            if (contador > 0) {
            setContador(contador - 1)//contador = contador -1 
            }
        }
    }
    
    return (
        <>
        <div class="d-flex flex-row justify-content-start">
            <button onClick={() => modificarContador("-")} className='btn'>-</button>
            <h3 className="p-2 align-items-center">{contador}</h3>
            <button onClick={() => modificarContador("+")} className='btn'>+</button>           
        </div>
        </>
    );

}

export default Contador;