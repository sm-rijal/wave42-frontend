import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { useGet } from '../hook/useFetch'
import { toast } from 'react-toastify';

function Register() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false) 


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
            await axios.post('http://localhost:8000/register', form)
            // console.log(response); 
            // alert('tambah data berhasil')
            setIsLoading(false)
            toast.success("Register berhasil!");
            navigate('/login')
            
        } catch (error) {
            console.log(error);
            if(error.response){
                toast.error(error.response.data.message);
            }
            setIsLoading(false)
        }
    }


  return (
    <Layout title='Register User'>
        <Link to='/product' className='m-2'>Back</Link>
        <div className='d-flex justify-content-center align-items-center'>
            <div >
                <h4 className='text-center my-3'>Register</h4>
                <form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='form-label'>Nama</label>
                        <input type="text" id='name' className='form-control' value={form.name} name='name' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id='email' className='form-control' value={form.email} name='email' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" id='password' className='form-control' value={form.password} name='password' onChange={handleChange} required/>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-primary' disabled={isLoading}>{isLoading ? 'Loading' : 'Register'}</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Register