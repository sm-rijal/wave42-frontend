import { useAuthContext } from "./useAuthContext"
import api from "../utils/api";


export const useVerifyToken = () => {

    const {dispatch} = useAuthContext();
    
    const verifyToken = async() => {
        const accessToken = localStorage.getItem('accessToken')

        if(accessToken){
            try {
                
                const config = {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                }

                const response = await api.get('/whoami', config)
                // console.log('res verify', response);
                const user = response.data
                const data = {...user, accessToken}
                // console.log('data', data);
                dispatch({type: 'LOGIN', payload: data})
                
            } catch (error) {
                console.log(error.response.data);
                dispatch({type: 'LOGOUT'})
            }

        }
    }

    return {verifyToken}
}