import React, { useState } from 'react'
import Layout from '../components/Layout';
import { Link, useNavigate } from 'react-router-dom';
import { useGet } from '../hook/useFetch';
import axios from 'axios';
import toRupiah from '@develoka/angka-rupiah-js';
import { GrEdit } from "react-icons/gr";
import { HiTrash } from "react-icons/hi2";
import { IoMdAddCircleOutline } from "react-icons/io";
import LoadingGif from '../loading.gif'
import EmptyBox from '../empty-box.png'
import { toast } from 'react-toastify';
import { IoStorefrontSharp  } from "react-icons/io5";
import {Button, Modal} from 'react-bootstrap';

function Product() {

    const [show, setShow] = useState(false);
    const handleShowAlert = () => setShow(true);
    const handleClose = () => setShow(false);

    const [data, isLoading, getData] = useGet('http://localhost:8000/products')
    const navigate = useNavigate()

    const handleDelete = async(id) => {
        try {
            await axios.delete(`http://localhost:8000/delete-product/${id}`)
            // alert('delete data berhasil')
            toast.success("Product berhasil dihapus!");
            getData()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout title='Produk'>
            <div className='list-product container'>
                <div className='d-md-flex justify-content-between align-items-center my-3'>
                    <h4 className=''>List Product</h4>
                    <div className='container-btn-add'>
                        <Link to='/add-product' className='link-btn'><IoMdAddCircleOutline className='icon-add' /> <span className='link-title'>Tambah</span></Link>
                    </div>
                </div>
                <div className='card-product'>
                    {
                        isLoading ? 
                        <div className='icon-loading'>
                            <img src={LoadingGif} alt="loading-icon" width={50} />
                        </div>
                        : data?.length === 0 ? 
                        <div className='icon-box-empty'>
                            <img src={EmptyBox} alt="empty-icon" />
                            <p className='fw-semibold' style={{color: '#ADA79F'}}>Data Kosong</p>
                        </div>
                        :

                        data && data.map((item) => {
                            return(
                                <div key={item.id} className='card-item'>
                                    <img src={item.image} alt="product" />
                                    <div className='mt-2'>
                                        <p className='title'>{item.name}</p>
                                        <p className='price'>{toRupiah(item.price, {floatingPoint: 0})}</p>
                                    </div>
                                    <div className='d-flex align-items-center gap-2 text-primary-emphasis'>
                                        <IoStorefrontSharp /> <span>{item.toko}</span>
                                    </div>
                                    <div className='box-button'>
                                        <GrEdit className='icon-edit' onClick={() => navigate(`/edit-product/${item.id}`)} />
                                        {/* <HiTrash  className='icon-delete' onClick={() => handleDelete(item.id)} /> */}
                                        <HiTrash  className='icon-delete' onClick={handleShowAlert} />

                                        {/* Modal Delete */}
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Hapus Produk</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <p className='bg-danger p-3 rounded bg-opacity-25'>Apakah anda yakin?</p>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button variant="primary" onClick={() => handleDelete(item.id)}>
                                                    Delete
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            
            </div>
        </Layout>
    )
}

export default Product