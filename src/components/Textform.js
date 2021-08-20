import React, {useState} from 'react' // useState is a Hook(React Hooks)
import PropTypes from 'prop-types'



export default function Textform(props) {

    const Clicktouppercase =() => {
        // console.log("Upper Case Is Clicked" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
    }
    const Clicktolowercase = ()=>{
        let newtext = Text.toLowerCase();
        setText(newtext);
    }
    const Clicktoclear = ()=>{
        let newtext = '';
        setText(newtext);
    }
    const Clicktocapitalize = ()=>{
        // let newtext = Text.trim();
        setText(Text.trim());
    }

    const search = ()=>{

    }



    // const d = Text() == '' ? "0" :(Text.split(' ').length)
    // const k = Text().length
    // const cr  = (k - (d-1)) ;





    // const [state, setState] = useState(initialState)
    const [Text, setText] = useState(''); // STATE VARIABLE

    // Text = "New Text "; // Wrong way to change the state
    // setText("Updating the text"); // Correct way of changing the state 

    return (
        <div>
            <div className="container my-4">
                <h1>{props.boxheading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="text" rows="8" value={Text} onChange={handelonchangeClick} placeholder="Enter your text here ..."></textarea>
                </div>
                
                <button type="button" className={`btn btn-${props.mode == 'dark' ? 'primary' : 'dark'} mx-2`} onClick={Clicktouppercase} >Convert To Uppercase</button>
                <button type="button" className={`btn btn-${props.mode == 'dark' ? 'primary' : 'dark'} mx-2`} onClick={Clicktolowercase}>Convert To Lowercase</button>
                <button type="button" className={`btn btn-${props.mode == 'dark' ? 'primary' : 'dark'} mx-2`} onClick={Clicktoclear}>Clear Text</button>
                <hr />
                <div className="container my-3">
                    <h2>Your Text Summary</h2>
                    <div className="container">
                    <h6>Charecter With Space : <span>{Text.length} Charecter</span> </h6>
                    <h6>Charecter : <span>{Text == '' ? "0" : (Text.length - ((Text == '' ? "0" :(Text.split(' ').length)) - 1))} Charecter</span> </h6>
                    <h6>Words : <span>{Text == '' ? "0" :(Text.split(' ').length)} Words</span></h6>
                    </div>
                </div>
                <hr />
                <div className="container my-3">
                    <h2>Preview Text</h2>
                    <p>{Text == '' ? "Type Your Text Here To Preview...." : Text}</p>
                </div>
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