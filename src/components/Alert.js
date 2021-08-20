import React from 'react'

function Alert(props) {
    return (
        <div>
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success! </strong>{props.text}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
    )
}

export default Alert
