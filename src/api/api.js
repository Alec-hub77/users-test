import { useState, useEffect } from 'react'
import axios from "axios";


const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const response = await axios.get(url)
            if(response.status === 200) {
                setData(response.data)
            } else {
                throw new Error()
            }
            setLoading(false)
        }
        getData()
    }, [url])
    return { data, setData, loading };
}

export default useFetchData;