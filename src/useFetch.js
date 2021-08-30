import { useState,useEffect } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    const abortCont = new AbortController();
    useEffect(() =>{
        setTimeout(() => {
          fetch(url,  {signal: abortCont.signal})
          .then(res => { 
              if (!res.ok) {
                  throw Error('some error')
              }
           return res.json();
           
          })
          .then(data => {
            setData(data);
            setIsPending(false);
          })
          .catch(err => {
              if (err.name === 'AbortError') {
                  console.log('fetche abored')
              }else{
                setIsPending(false);
                setError(err.messaage);
              }
              
          })
        },1000)
        return () => abortCont.abort();
     },[url]);
     return {data, isPending, error}
}

export default useFetch;