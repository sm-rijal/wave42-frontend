import { useEffect, useState } from "react"
import api from '../utils/api'

export const useGet = (endpoint, config) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async() => {
        try {
            setIsLoading(true)
            const response = await api.get(endpoint, config)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }    
    }

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return [data, isLoading, getData]
}


// pCqVSNtt8lTUHjtIb50k
// 2TSZe6U6RFHMitPhvvVbo5BUcga0VeDTncevMoDT