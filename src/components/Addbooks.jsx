import React from 'react';
import './Addbooks.css';
import { useState } from 'react';


function AddBook(props){

    let[enteredId, setEnteredId] = useState("");
    let[enteredTitle, setEnteredTitle] = useState("");
    let[enteredAuthor, setEnteredAuthor] = useState("");
    let[enteredPrice, setEnteredPrice] = useState("");

    function handleChangeId(event) {
        setEnteredId(event.target.value);
    }

    function handleChangeTitle(event) {
        setEnteredTitle(event.target.value);
    }

    function handleChangeAuthor(event) {
        setEnteredAuthor(event.target.value);
    }

    function handleChangePrice(event) {
        setEnteredPrice(event.target.value);
    }
     
    function handleSubmit(event){
        event.preventDefault();
        let book= {
            id: enteredId,
            title: enteredTitle,
            author: enteredAuthor,
            price: enteredPrice
         };
        props.handleSubmit(book);

            setEnteredId(' ');
            setEnteredTitle(' ');
            setEnteredAuthor(' ');
            setEnteredPrice(' ');

    }

    return (
        <div className="form-container">

            <form className='form-div' onSubmit={handleSubmit}>
            <span id=''>BookId:</span><input type = "text" className='input-field' id="id" value={enteredId} onChange={handleChangeId}></input>
            <span id=''>BookTitle:</span><input type = "text" className='input-field'  id="title" value={enteredTitle}  onChange={handleChangeTitle}></input>
            <span id=''>BookAuthor:</span><input type = "text"  className='input-field' id="author" value={enteredAuthor}  onChange={handleChangeAuthor}></input>
            <span id=''>BookPrice:</span><input type = "text" className='input-field' id="price" value={enteredPrice} onChange={handleChangePrice}></input>

                <input type="submit" value="add" id="add-btn"/>
            
            </form>
        </div>  
    );
}

export default AddBook;

