import { useState, useEffect } from "react";

const useFetch = (path) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(path, { signal: abortCont.signal }).then(
            res => {
                if (!res.ok){
                throw Error("Could not fetch data");
                }
                return res.json();
            }
            ).then(
            (data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            }
            )
            .catch((err) => {
                if(err.name !== 'AbortError'){
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 500);

            return() => abortCont.abort();
        }, [path])

    return {data, isPending, error, setData}
}
 
export default useFetch;