import React from 'react'


function errorMesaje () {
    const mesaje = "Hola"
    
  return (
    
    <div className="error">
        {mesaje && <p className="error">{mesaje}</p>}
        <input type="text"/>
        
        
   </div>
    
  )

}


export default errorMesaje