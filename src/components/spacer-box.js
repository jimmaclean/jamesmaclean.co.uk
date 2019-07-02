import React from 'react'

const Spacer = ({size}) => {
    const boxStyle = {
        backgroundColor: 'pink',
        colour: 'red',
        height: size,
        width: size,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
    
    return <div style={boxStyle}>
        <span>{size}</span>
    </div>
}

export default Spacer


