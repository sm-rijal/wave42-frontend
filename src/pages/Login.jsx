import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useAuthContext } from '../hook/useAuthContext';

function Login() {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false) 

    const {user, dispatch} = useAuthContext()

    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {

            setIsLoading(true)
            const response = await axios.post('http://localhost:8000/login', form)
            console.log(response); 

            dispatch({type: 'LOGIN', payload: response.data})

            setIsLoading(false)
            toast.success("Login berhasil!");
            navigate('/product')


            
        } catch (error) {
            console.log(error);
            if(error.response){
                toast.error(error.response.data.message);
            }
            setIsLoading(false)
        }
    }

    const handleLoginGoogle = () => {
        window.open('http://localhost:8000/auth/google', '_self');
    }

    if(user){
        return <Navigate to='/' />
    }

  return (
    <Layout title='Login User'>
        <Link to='/product' className='m-2'>Back</Link>
        <div className='d-flex justify-content-center align-items-center'>
            <div >
                <h4 className='text-center my-3'>Login User</h4>
                <form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id='email' className='form-control' value={form.email} name='email' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" id='password' className='form-control' value={form.password} name='password' onChange={handleChange} required/>
                    </div>

                    <div className='d-flex justify-content-end gap-3'>
                        <button type='button' className='btn btn-info' onClick={handleLoginGoogle}>Login Google</button>
                        <button className='btn btn-primary' disabled={isLoading}>{isLoading ? 'Loading' : 'Login'}</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Login