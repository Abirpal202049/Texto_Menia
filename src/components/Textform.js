import React from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
    return (
        <div>
            <div className="container my-4">
                <h1>{props.boxheading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="text" rows="8" placeholder="Enter your text here ..."></textarea>
                </div>
                <button type="button" className="btn btn-dark mx-2">Convert To Uppercase</button>
                <button type="button" className="btn btn-dark mx-2">Convert To Lowercase</button>
            </div>
        </div>
    )
}

Textform.propTypes = {
    boxheading : PropTypes.string.isRequired
}

Textform.defaultProps = {
    boxheading : "Enter your title for the TextArea"
}