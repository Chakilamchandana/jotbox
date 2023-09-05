import React, { useState } from "react";
import Header from "./Header";
import Footer from './Footer';
import Note from './Note';
import jots from '../jots';
import CreateNotes from "./CreateNotes";

function App(){

    const [jots, setJots] = useState([]);

    function getNote(newJot){
        setJots((prevNotes) => {
            return [...prevNotes, newJot]
        });
    }

    function removeNote(id){
        // console.log("delete is triggered");
        setJots((prevNotes) => {
            return prevNotes.filter((jotItem, index)=>{
                return index !== id;
            })
        })
    }

    return (
        <div className="app">
            <Header />
            <CreateNotes 
            onAdd = {getNote}
            />
            <div className="allNotes">
            {jots.map((jotItem, index) =>{
                return (
                    <Note 
                    key = {index}
                    id = {index}
                    title = {jotItem.title}
                    content = {jotItem.content}
                    onDelete = {removeNote}
                />
                )
            })}
            </div>
            <div className="foot">
            <Footer />
            </div>
        
        </div>
    )
}

export default App;