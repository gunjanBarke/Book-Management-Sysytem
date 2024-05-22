import Book from './components/Book';
import Addbooks from './components/Addbooks';
import {useEffect, useState} from 'react';
import useFetch from './components/useFetch';
function Home(){

    let { data, error} = useFetch('http://localhost:8000/books');

    let[books, setBooks] = useState(null);
     
    useEffect(()=>{
        setBooks(data);
     },[data]);


    //                     4
    function handleRemove(id){

        fetch(`http://localhost:8000/books/${id}`, {
            method: 'DELETE'
        })
        .then(()=>{
            let newBooks = books.filter(
                (element)=>{
                    return element.id !=id;
                }
            )
            setBooks(newBooks);
        })
        .catch(error => {
            // Handle error
            console.error('Error removing book:', error);
        });
    }   

    function handleSubmit(book) {
        fetch('http://localhost:8000/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
        })
        .then(()=>{
            let newBooks = [...books];
            newBooks.push(book);
            setBooks(newBooks); 
            
        }).catch((error)=>{
            console.error("error in adding",error);
        });

    
    }


    return(
        <div>
                <Addbooks handleSubmit={handleSubmit}></Addbooks>

                {   
             /* !error? */  books &&                                         // to make sure book is not null
                books.map(
                    (element)=>{
                        return <Book 
                                    key={element.id} 
                                    id={element.id} 
                                    title={element.title} 
                                    author={element.author} 
                                    price={element.price} 
                                    handleRemove={handleRemove}
                                    books = {books}
                                    setBooks = {setBooks}
                                    >    
                                </Book>
                    }
                ) 
               /* :
                error */
            }                    
        </div>
    )
}

export default Home;