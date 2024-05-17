import React, { useEffect } from 'react'
import { toast } from 'react-toastify';

function CallbackOauthGoogle() {

    const handleCallbackGoogle = () => {
        try {
            
            const searchParams = new URLSearchParams(window.location.search);
            const accessToken = searchParams.get('token');
            console.log('token', accessToken);
            if(accessToken){
                localStorage.setItem('accessToken', accessToken)
                window.open('https://samsul-rijal.my.id/', '_self');
            } else {
                toast.error('Login gagal');
            }

        } catch (error) {
            console.log(error);
            toast.error('Login gagal');
        }

    }

    useEffect(() => {

        handleCallbackGoogle()
    }, [])

  return (
    <div>
        <p>Redirecting...</p>
    </div>
  )
}

export default CallbackOauthGoogle