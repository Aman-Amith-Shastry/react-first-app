import { useState, useEffect } from "react";

const useFetch = (path) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(path).then(
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
            setError(err.message);
            setIsPending(false);
            })
        }, 1000);
        }, [path])

    return {data, isPending, error, setData}
}
 
export default useFetch;