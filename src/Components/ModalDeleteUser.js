import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { DeleteUser } from '~/Api/User-Api';

const ModalDeleteUser = ({ handleClose, showModalDelete, dataUserDelete, DeleteUserModal }) => {
    const confirmDelete = async () => {
        const response = await DeleteUser(dataUserDelete.id);
        if (response && response.statusCode === 204) {
            DeleteUserModal(dataUserDelete);
            handleClose();
            toast.success('Delete successfully', {
                pauseOnHover: false,
                delay: 0,
            });
        } else {
            toast.error('Delete error', {
                pauseOnHover: false,
                delay: 0,
            });
        }
    };
    return (
        <>
            <Modal show={showModalDelete} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-delete">
                        Do you want to delete this user?
                        <br />
                        <strong>{dataUserDelete?.email}</strong>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={confirmDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalDeleteUser;
