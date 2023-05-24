import React from "react";  
export const TodoAdd = () => {
return <form>
    
    <input 
    type="text" 
    className='input-add'
    name='description' 
    value='Aprender Php' 
    placeholder='¿Que hay que hacer'
    />

    <button className="btn-add" type="submit"></button>
</form>
}

