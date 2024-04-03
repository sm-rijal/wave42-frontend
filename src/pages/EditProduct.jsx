import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import axios from 'axios'
import { useGet } from '../hook/useFetch'

function EditProduct() {

    const [form, setForm] = useState({
        name: '',
        price: 0,
        store_id: 1,
    })

    const ID = useParams().id
    const navigate = useNavigate()
    const handleChange = (e) => {
        setForm({
           ...form,
           [e.target.name]: e.target.value ,
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            // post ke api
            const response = await axios.patch(`http://localhost:8000/edit-product/${ID}`, form)
            console.log(response); 
            alert('edit produk berhasil');
            navigate('/product')

        } catch (error) {
            console.log(error);
            alert('edit data gagal')
        }
    }

    const [store] = useGet('http://localhost:8000/store') 
    const [product] = useGet(`http://localhost:8000/detail-product/${ID}`)
    
    useEffect(() => {
        setForm(!product ? form : product)
        
    }, [product])

  return (
    <Layout title='Edit Produk'>
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
                <select name="store_id" value={form.store_id} onChange={handleChange}>
                    <option value="">Pilih</option>
                    {store?.map((item) => (                       
                            <option value={item.id} key={item.id} defaultValue={item.id === product?.store_id}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <button>Simpan</button>
            </div>
        </form>

    </Layout>
  )
}

export default EditProduct