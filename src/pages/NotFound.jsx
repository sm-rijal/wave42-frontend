import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

  const navigate = useNavigate()

  return (
    <div className='d-flex justify-content-center my-4'>
      <div className='text-center'>
          <h2>404 Not Found</h2>
          <p>Halaman yang kamu cari tidak ditemukan</p>
          <button className='btn btn-secondary px-4' onClick={() => navigate('/')}>Kembali</button>
      </div>
    </div>
  )
}

export default NotFound