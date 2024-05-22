import { useEffect, useState } from "react";


function useFetch(url){
     let [data,setdata]=useState(null);
     let [error,setError]=useState(null);
    
     useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw new Error('Failed to fetch');
            }
            return res.json();
        })
        .then((data)=>{
            setdata(data);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
        });
    },[url]);

    return {data,error};
}

export default useFetch;