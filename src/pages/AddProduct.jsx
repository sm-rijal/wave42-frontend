import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { useGet } from '../hook/useFetch'

function AddProduct() {

    const [form, setForm] = useState({
        name: '',
        price: 0,
        image: null,
        store_id: 1,
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
           ...form,
        //    [e.target.name]: e.target.file ? e.target.files[0] : e.target.value => sebelumnya
           [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
        })

        console.log(e.target.files);

    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        try {
            // post ke api
            const formDataProduct = new FormData();
            formDataProduct.append('name', form.name)
            formDataProduct.append('price', form.price) 
            formDataProduct.append('image', form.image)
            formDataProduct.append('store_id', form.store_id)

            const response = await axios.post('http://localhost:8000/add-product', formDataProduct)
            console.log(response); 
            alert('tambah data berhasil')
            navigate('/product')

            
        } catch (error) {
            console.log(error);
        }
    }

    const [data] = useGet('http://localhost:8000/store') 

  return (
    <Layout title='Tambah Produk'>
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
                <label htmlFor="">Store</label>
                <select name="" id="">
                    <option value="">Pilih</option>
                    {data?.map((item) => (
                       
                            <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="">Upload Image</label>
                <input type="file" name='image' onChange={handleChange} />
            </div>

            <div>
                <button>Simpan</button>
            </div>
        </form>

    </Layout>
  )
}

export default AddProduct