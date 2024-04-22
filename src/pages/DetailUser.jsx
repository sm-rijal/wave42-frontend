import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function DetailUser() {

    const {id} = useParams();
    const [data, setData] = useState({})
    const [counter, setCounter] = useState(0)

    const getData = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const resData = await response.json();
        console.log(resData);
        setData(resData)
    }

    const Add = () => {
        setCounter(counter+1)
    }

    const handleResize = () => {
        console.log('mouse gerak');
    }

    // berjalan hanya 1 kali ketika masuk ke dalam pages component
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // berjalan ketika counter ada update
    useEffect(() => {
        console.log('jalan didupdate');
        getData(); // ketika state counter berubah, maka getData diajalankan ulang 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [counter]);

    useEffect(() => {
        console.log('jalan willunmount');
        window.addEventListener(('mousemove'), handleResize)

        return () => {
            window.removeEventListener('mousemove', handleResize)
        }
        
    }, [])

  return (
    <Layout title='Detail user'>
        <div>
            <h2>{counter}</h2>
            <button onClick={Add}>Tambah</button>
            <button onClick={() => setCounter(counter -1)}>Kurang</button>
        </div>
        <Link to='/'>Back</Link>
        <h3>Detail User {id}</h3>
        <p>{data.name}</p>
        <p>{data.username}</p>
        <p>{data.email}</p>
        <p>{data.address?.city}</p>
    </Layout >
  )
}

export default DetailUser