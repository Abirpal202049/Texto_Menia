import React, {useState} from 'react' // useState is a Hook(React Hooks)
import PropTypes from 'prop-types'
// import reactDom from 'react-dom';
import './Transform.css';



export default function Textform(props) {
    document.title = "Texto_Menia - Home";

    // const [state, setState] = useState(initialState)
    const [Text, setText] = useState(''); // STATE VARIABLE

    // Text = "New Text "; // Wrong way to change the state
    // setText("Updating the text"); // Correct way of changing the state 

    const Clicktouppercase =() => {
        // console.log("Upper Case Is Clicked" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext);
        props.AlertMessage("Converted To Uppercase", "success")
    }
    const Clicktolowercase = ()=>{
        let newtext = Text.toLowerCase();
        setText(newtext);
        props.AlertMessage("Converted To Lowercase", "success")
    }
    const Clicktoclear = ()=>{
        let newtext = '';
        setText(newtext);
        props.AlertMessage("Text Has Been Cleared", "success")
    }
    const RandomText = ()=>{
        let randtext = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, adipisci quas explicabo optio exercitationem earum ea incidunt, voluptas vitae consectetur pariatur facere ullam nisi distinctio eaque sequi odio mollitia omnis. Recusandae, eum eius. Aliquam quae ipsa velit dolorem. At harum ipsa nostrum consequatur optio non esse, itaque pariatur excepturi assumenda molestias facere quisquam tempore iusto fugit placeat ut maiores cum voluptates ratione, saepe odio perspiciatis. Optio placeat qui blanditiis architecto necessitatibus quis enim iure impedit molestiae labore repellendus minus doloremque sequi dolor, nihil vitae eum facilis soluta voluptates autem officia. Nemo illo ipsum earum magni veniam voluptatibus debitis dicta quae.`
        setText(randtext);
        props.AlertMessage("Generated Random Text", "success")
    }
    const RemoveSpace = ()=>{
        let ntext = Text.replace(/\s+/g, ' ').trim()
        setText(ntext);
        props.AlertMessage("Removed Extra Spaces", "success")
    }


    const handelonchangeClick =(event) => {
        // console.log("handelonchangeClick function is triggered now");
        setText(event.target.value);
    }


    // Search Funchinility
    const [searchtext, setSearchtext] = useState("")
    const [decision, setDecision] = useState('')
    const handelonchangeClicksearch =(event) => {
        setSearchtext(event.target.value);
    }
    const searchup = () =>{
        let arr = Text.split(" ");
        let key =  searchtext;
        let flag = -2;
        for (let i = 0; i < arr.length; i++) {
            if(key === arr[i]){
                flag = i;
                break;
            }
            else{
                flag = -1;
            }
        }
        
        if (flag === -1) {
            setDecision("❌ The Word Is Not Present");
            props.AlertMessage("Word Not Present In The Text", "danger")
            
        }
        else{
            setDecision(`✅ The Word "${searchtext}" Is Present At Position ${flag + 1}`);
            props.AlertMessage("Word Present In The Text", "success")
        }

    }

    



    return (
        <div>
            <div className="container my-4">
                <h1>{props.boxheading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="text" rows="8" value={Text} onChange={handelonchangeClick} placeholder="Enter your text here ..."></textarea>
                </div>
                
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-1 ${Text === "" ? "disabled" : ""}`} onClick={Clicktouppercase} >Convert To Uppercase</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-1 ${Text === "" ? "disabled" : ""}`} onClick={Clicktolowercase}>Convert To Lowercase</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-1 ${Text === "" ? "disabled" : ""}`} onClick={Clicktoclear}>Clear Text</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-1`} onClick={RandomText}>Generate Random Text</button>
                <button type="button" className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-1 ${Text === "" ? "disabled" : ""}`} onClick={RemoveSpace}>Remove Extra Space From Text</button>
                {/* <button type="button" className={`btn btn-${props.mode === 'dark' ? 'primary' : 'dark'} mx-1 my-1`} onClick={Capitalize}>Convert To Camel Case</button> */}
                <hr />

                <div className="container my-3 meniaflex">
                    <div className="container">
                    <h2 className="meniaflexHeading">Your Text Summary</h2>
                    <div className="container my-3">
                        <h6>Charecter With Space : <span>{Text.length} Charecter</span> </h6>
                        <h6>Charecter : <span>{Text === '' ? "0" : (Text.length - ((Text === '' ? "0" :(Text.split(' ').length)) - 1))} Charecter</span> </h6>
                        <h6>Words : <span>{Text === '' ? "0" :(Text.replace(/\s+/g, ' ').trim().split(' ').length)} Words</span></h6>
                        {/* https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string */}
                    </div>
                    </div>
                    <div className="container">
                        <h2 className="meniaflexHeading searchheading"><label htmlFor="searchword">Enter the word you want to Search </label></h2>
                        <form className="d-flex my-3">
                            
                            <input rows="1" value={searchtext} onChange={handelonchangeClicksearch} type="search" className="form-control me-2"  id="searchword" placeholder="Enter the word you want to find from the above text"/>
                            
                            <button type="button" onClick={searchup} className={`btn btn-${props.mode === 'dark' ? 'success' : 'dark'} mx-2 ${searchtext === "" ? "disabled" : ""}`} >Search</button>
                        </form>
                        <h5>{decision}</h5>
                    </div>
                </div>
                <hr />
                <div className="container my-3">
                    <h2>Preview Text</h2>
                    <p>{Text === '' ? "Type Your Text Above To Preview Here...." : Text}</p>
                    
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