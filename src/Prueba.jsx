import React, { useState} from 'react'

import './index.css'

 function add() {
    
    cont [count, setCount] = useState (0)
    
    function handleCount () {

        const newCount = count + 1
        setCount (newCount)

    }

    return (
        <div>
            <button onClick= {handleCount}>{count}</button>
        </div>
    )
}

  
  export default add;