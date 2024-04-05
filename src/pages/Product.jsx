import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useGet } from '../hook/useFetch';
import axios from 'axios';
import { ThemeContext } from '../context/ThemeContext';

function Product() {

    // const [data, setData] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // const getData = async() => {
    //     try {
    //         setIsLoading(true)
    //         const response = await axios.get('http://localhost:8000/products')
    //         console.log(response.data);
    //         setData(response.data)
    //         setIsLoading(false)
            
    //     } catch (error) {
    //         console.log(error);
    //         setIsLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     getData()
    // }, [])

    const [data, isLoading, getData] = useGet('http://localhost:8000/products')

    const navigate = useNavigate()

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8000/delete-product/${id}`)
            alert('delete data berhasil')
            getData()
        } catch (error) {
            console.log(error);
        }
    }

    const {halo, handleKlik} = useContext(ThemeContext);


  return (
    <Layout title='Produk'>
    <div>
        <button onClick={handleKlik}>klik {halo}</button>
        <div>
            <Link to='/add-product'>Tambah</Link>
        </div>
        {
            isLoading ? 'Loading . . . ' : data?.length === 0 ? 'Data Kosong' :

            data && data.map((item) => {
                return(
                    <div key={item.id} style={{margin: 20}}>
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <img src={item.image} alt="image" style={{width: 250}} />
                        <div style={{display: 'flex', gap: 10}}>
                            <button onClick={() => navigate(`/edit-product/${item.id}`)}>Edit</button>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                        <hr />
                    </div>
                )
            })
        }
    </div>
</Layout>
  )
}

export default Product