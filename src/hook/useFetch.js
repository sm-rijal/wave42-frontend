import axios from "axios";
import { useEffect, useState } from "react"


export const useGet = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async() => {
        try {
            setIsLoading(true)
            const response = await axios.get(url)
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }    
    }

    useEffect(() => {
        getData();
    }, [])

    return [data, isLoading, getData]
}
