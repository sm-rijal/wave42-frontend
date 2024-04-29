import React from 'react'
import {Button, Modal} from 'react-bootstrap';

function ModalDelete({show, handleClose, handleDelete, title}) {
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Hapus {title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='bg-danger p-3 rounded bg-opacity-25'>Apakah anda yakin?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ModalDelete