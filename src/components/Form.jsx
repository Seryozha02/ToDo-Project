import { useState } from "react";


function Form(props) {
    let onSubmit = props.onSubmit;

    const[inputText, setInputText] = useState("")

    function handleChangeInputText(e) {
        setInputText(e.target.value)
    }

    return(
        <div className="todo">
            <input className="userInput" type="text" placeholder="Your todo" value={inputText} onChange={(e) => {
                handleChangeInputText(e)
            }}/>

            <button className="inputButton" onClick={(e) => {
                onSubmit(inputText)
                setInputText("")
            }}
            >Add</button>
        </div>
    )
}

export default Form;