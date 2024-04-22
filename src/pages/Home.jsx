import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [counter, setCounter] = useState(0);
    // let counter = 0
    const [data, setData] = useState([])

    // call api
    const getData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const resData = await response.json();
        console.log(resData);
        setData(resData)
    }

    function Tambah(){
        // counter = counter + 1
        setCounter(counter + 1);
    }

    function Kurang(){
        if (counter > 0){
            setCounter(counter - 1);
        }
    }

    const navigate = useNavigate();

    const handleDetailUser = (id) => {
        navigate(`detail-user/${id}`)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Layout title='Home'>
            <h2>{counter}</h2>
            <button onClick={Tambah}>Tambah</button>
            <button onClick={Kurang}>Kurang</button>
            <button onClick={() => setCounter(0)}>Reset</button>


            {/* <div>
                <ComLabel label='Name' type='text' placeholder='Masukan Nama' />
                <ComButton title='Simpan' handleClick = {handleClick}  />
            </div>
            <div>
                <ComLabel label='Phone' type='date' />
                <ComButton title='Edit' handleClick = {handleClick2} />
            </div> */}

            <h3>Daftar Users</h3>
            {data.map((item) => {
                return(
                    <div onClick={() => handleDetailUser(item.id)} key={item.id}>
                        {/* <Link to={`/detail-user/${item.id}`}> */}
                            <p>{item.name}</p>
                        {/* </Link> */}
                    </div>
                )
            })}
        </Layout>
    )
}

export default Home