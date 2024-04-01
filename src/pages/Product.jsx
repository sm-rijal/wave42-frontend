import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Product() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async() => {
        setIsLoading(true)
        const response = await axios.get('http://localhost:8000/products')
        console.log(response.data);
        setData(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])


  return (
    <Layout title='About'>
    <div>
        <div>
            <Link to='/add-product'>Tambah</Link>
        </div>
        {
            isLoading ? 'Loading . . . ' : data.length == 0 ? 'Data Kosong' :

            data.map((item) => {
                return(
                    <div key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
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