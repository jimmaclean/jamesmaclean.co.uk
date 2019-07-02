import React from 'react'

const SideScroller = ({children}) => {
    const boxStyle = {
        display: 'block',
        width: '100%',
        whiteSpace: 'nowrap',
        overflowX: 'auto',
    }
    return <div style={boxStyle}>{children}</div>
}

export default SideScroller