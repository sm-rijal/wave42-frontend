import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import ComLabel from '../components/atoms/ComLabel';
import ComButton from '../components/atoms/ComButton';

function Home() {

    const [counter, setCounter] = useState(0);
    // let counter = 0
    const [data, setData] = useState([])
    // const data
    const [isLogin, setIsLogin] = useState(false)

    // call api
    const getData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
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

    function handleClick(){
        alert('Oke')
    }
    function handleClick2(){
        alert('Oke 2')
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <Navbar title = 'Home' isLogin={isLogin} handleLogin={() => setIsLogin(true)} handleLogout={() => setIsLogin(false)}  />

            <h2>{counter}</h2>
            {/* <button onClick={() => setCounter(counter + 1)}>Tambah</button> */}
            <button onClick={Tambah}>Tambah</button>
            <button onClick={Kurang}>Kurang</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            {/* {
                counter > 0 ?
                <button onClick={Kurang}>Kurang</button>
                : 
                ''
            } */}

            <div>
                <ComLabel label='Name' type='text' placeholder='Masukan Nama' />
                <ComButton title='Simpan' handleClick = {handleClick}  />
            </div>
            <div>
                <ComLabel label='Phone' type='date' />
                <ComButton title='Edit' handleClick = {handleClick2} />
            </div>


            {data.map((item) => {
                return(
                    <div key={item.id}>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home