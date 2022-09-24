import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { PostCreateUser } from '../Api/User-Api';

const ModalAddUser = ({ UpdateCreateUsers, showModalAddUser, handleClose }) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handlePostCreateUser = async () => {
        try {
            const response = await PostCreateUser(name, job);
            UpdateCreateUsers({
                first_name: response.name,
                id: response.id,
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
        <Modal show={showModalAddUser} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
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
                <Button variant="primary" onClick={handlePostCreateUser}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalAddUser;
