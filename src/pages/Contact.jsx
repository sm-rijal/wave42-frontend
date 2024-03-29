import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

export function Contact() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

  return (
    <Layout title='Contact'>
        Contact
        <div>
            <button onClick={handleClick}>Pindah Home</button>
        </div>
    </Layout>
  )
}

export function About(){
    return(
        <Layout title='About'>
            ABOUT
        </Layout>
    )
}
