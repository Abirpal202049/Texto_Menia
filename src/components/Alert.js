import React from 'react'

function Alert(props) {
    const caps = (word)=>{
        const lower = word.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1))
    }


    return (
        // CLS - Cumilative Layout Shift (Layout must not shift while you are making any chnges)
        <div style={{height : "50px"}}>
        {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{caps(props.alert.type)}: </strong>{props.alert.msg}
            </div>
        </div>}
        </div>
    )
}

export default Alert
