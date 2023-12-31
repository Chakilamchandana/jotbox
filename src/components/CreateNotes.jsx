import React, { useState } from "react";

function CreateNotes(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    return(
        <div>
        <form>
            <input type="text" name="title" onChange={handleChange} value={note.title}  placeholder="Jot down your big idea.."/>
            <textarea rows="3" name="content" onChange={handleChange} value={note.content} placeholder="Have more to say?"/>
            <button type="submit" className="submitBtn" onClick={submitNote}>+</button>
        </form>
        </div>
        
    )
}

export default CreateNotes;