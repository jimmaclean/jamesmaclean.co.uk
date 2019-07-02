import React from 'react'

const Spacer = ({size}) => {
    const boxStyle = {
        backgroundColor: 'pink',
        color: 'red',
        height: size,
        width: size,
        marginRight: '16px',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
    }
    
    const fontStyle = {
        fontSize: (size <= 20 ? '10px' : '16px')
    }

    return <div style={{...boxStyle, ...fontStyle}}>
        <span>{size}</span>
    </div>
}

export default Spacer


