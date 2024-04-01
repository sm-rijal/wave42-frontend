import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import axios from 'axios'

export function Contact() {

    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }


      // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
    
    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { 
        console.log(status, meta, file) 
        if(status === 'uploading'){
            setRefresh(!refresh)
        }
        if(status === 'done'){
            setRefresh(!refresh)
        }
        if(status === 'removed'){
            setRefresh(!refresh)
        }
    }
    
    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }

  return (
    <Layout title='Contact'>
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
        />
    </Layout>
  )
}

export function About(){


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async() => {
        setIsLoading(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data);
        setData(response.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <Layout title='About'>
            <div>
                {
                    isLoading ? 'Loading . . . ' : data.length == 0 ? 'Data Kosong' :

                    data.map((item) => {
                        return(
                            <div key={item.id}>
                                <p>Name: {item.name}</p>
                                <p>Address: {item.address.city}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}
