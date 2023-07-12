import { useEffect, useState } from "react";

const useFetch = (endpoint) => {
    
    const [data,setData] = useState([])

    useEffect(()=>{
        const dataFetch = fetch(endpoint)
        dataFetch.then(res => res.json()).then(res => setData(res))
    }, [endpoint])

    return {data: data}
}

export default useFetch
