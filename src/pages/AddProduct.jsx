import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { useGet } from '../hook/useFetch'
import { toast } from 'react-toastify';

function AddProduct() {

    const [form, setForm] = useState({
        name: '',
        price: 0,
        image: null,
        store_id: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
           ...form,
        //    [e.target.name]: e.target.file ? e.target.files[0] : e.target.value => sebelumnya
           [e.target.name]: e.target.type === 'file' ? e.target.files[0] : e.target.value
        })
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

            await axios.post('http://localhost:8000/add-product', formDataProduct)
            // console.log(response); 
            // alert('tambah data berhasil')
            toast.success("Produk berhasil ditambahkan!");
            navigate('/product')
            
        } catch (error) {
            console.log(error);
        }
    }

    const [data] = useGet('http://localhost:8000/store') 

  return (
    <Layout title='Tambah Produk'>
        <Link to='/product' className='m-2'>Back</Link>
        <div className='d-flex justify-content-center align-items-center'>
            <div >
                <h4 className='text-center my-3'>Tambah Produk</h4>
                <form className='d-flex flex-column gap-3' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className='form-label'>Nama</label>
                        <input type="text" id='name' className='form-control' value={form.name} name='name' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor="price" className='form-label'>Harga</label>
                        <input type="number" id='price' name='price' className='form-control' value={form.price} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="store_id" className='form-label'>Store</label>
                        <select name="store_id" id="store_id" className='form-select' value={form.store_id} onChange={handleChange} required>
                            <option value="">Pilih</option>
                            {data?.map((item) => (
                            
                                    <option value={item.id} key={item.id}>{item.name}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="image" className='form-label'>Upload Image</label>
                        <input type="file" name='image' id='image' className='form-control' onChange={handleChange} required/>
                    </div>

                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-primary'>Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default AddProduct