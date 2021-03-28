import React, { useState } from 'react'
import './App.css/'
import taskList from './taskList'
import './taskList.jsx/'
import './errorMesage.jsx/'
import errorMesaje from './errorMesage'


function App (){


    
    return (
        <div className="taskStyle">
            <input className="inputStyle"></input>
            <br/>
            <br/>
            
            
            
            
            <button onClick={errorMesaje}>Add</button>
            
            

        </div>
    )
     
}

    


  
  export default App