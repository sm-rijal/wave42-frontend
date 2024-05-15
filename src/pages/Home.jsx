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

            <div className='d-flex bg-info'>
                <div className='bg-primary' style={{flex: 1}}>
                    KIRI
                </div>
                <div className='bg-secondary' style={{flex: 3}}>
                <div className='d-flex gap-3 flex-wrap'>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    <div class="card" style={{width: "18rem"}}>
                        <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>


                </div>
                <div className='bg-danger' style={{flex: 1}}>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>



            <h2 data-testid='count-value'>{counter}</h2>
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