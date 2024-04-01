import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'

function AddProduct() {

    const [form, setForm] = useState({
        name: '',
        price: 0,
    })

    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name]: e.target.value 
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            console.log(form);
            // post ke api
            const response = await axios.post('http://localhost:8000/add-product', form)
            console.log(response); 
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <Layout>
        <Link to='/product'>Back</Link>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nama</label>
                <input type="text" value={form.name} name='name' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="">Harga</label>
                <input type="number" name='price' value={form.price} onChange={handleChange} />
            </div>
            <div>
                <button>Simpan</button>
            </div>
        </form>

    </Layout>
  )
}

export default AddProduct