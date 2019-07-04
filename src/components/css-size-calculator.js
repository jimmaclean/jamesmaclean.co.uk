import React from 'react'

const Calculator = () => {
    
    return (
    <div>Total CSS classes: {10*10*5}
        <input type='number' onChange={(event)=>console.log(event.target.value)}/>
    </div>
    )
}
export default Calculator