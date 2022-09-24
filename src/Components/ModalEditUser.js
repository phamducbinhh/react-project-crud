import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

const ModalEditUser = ({ showModalEdit, handleClose, dataUserEdit, handleUpdateEditUser }) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    // hiện mặc định trong ô input
    useEffect(() => {
        if (showModalEdit) {
            setName(dataUserEdit.first_name);
        }
    }, [dataUserEdit.first_name, showModalEdit]);

    //hàm xử lý logic edit

    const handleEditUser = async () => {
        try {
            const response = await axios.put(`https://reqres.in/api/users/`, {
                name,
                job,
            });
            console.log(response);
            handleUpdateEditUser({
                first_name: name,
                id: dataUserEdit.id,
            });
            setName('');
            setJob('');
            handleClose();
            toast.success('create user added successfully', {
                pauseOnHover: false,
                delay: 0,
            });
        } catch (err) {
            toast.error(err.message, {
                pauseOnHover: false,
                delay: 0,
            });
        }
    };
    return (
        <>
            <Modal show={showModalEdit} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="body-add-new">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Jobs</label>
                            <input
                                type="text"
                                className="form-control"
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalEditUser;
