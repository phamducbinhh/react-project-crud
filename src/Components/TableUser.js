import React, { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { GetAllUsers } from '../Api/User-Api';
import ModalAddUser from './ModalAddUser';
import ModalDeleteUser from './ModalDeleteUser';
import ModalEditUser from './ModalEditUser';
import Pagination from './Pagination';

const TableUser = () => {
    const [listUsers, setListUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [showModalAddUser, setShowModalAddUser] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [showModalEdit, setShowModalEdit] = useState(false);
    //state lưu thông tin người muốn xóa
    const [dataUserDelete, setDataUserDelete] = useState({});
    //state lưu thông tin người muốn edit
    const [dataUserEdit, setDataUserEdit] = useState({});

    const getUsersData = async (page) => {
        try {
            const respones = await GetAllUsers(page);
            if (respones && respones.data) {
                setListUsers(respones.data);
                setPageCount(respones.total_pages);
            }
        } catch (err) {
            toast.error(err.message, {
                pauseOnHover: false,
                delay: 0,
            });
        }
    };
    useEffect(() => {
        getUsersData();
    }, []);

    //paginate
    const handlePageClick = (e) => {
        getUsersData(Number(e.selected + 1));
    };

    //render khi add users
    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    };

    //render khi edit user
    const handleUpdateEditUser = (user) => {
        let cloneListUsersEdit = [...listUsers];
        const index = cloneListUsersEdit.findIndex((item) => item.id === user.id);
        cloneListUsersEdit[index].first_name = user.first_name;
    };

    //close modal
    const handleClose = () => {
        setShowModalAddUser(false);
        setShowModalDelete(false);
        setShowModalEdit(false);
    };
    //show modal add user
    const handleShowAddUser = () => setShowModalAddUser(true);

    //show delete user
    const handleShowDeleteUser = (user) => {
        setDataUserDelete(user);
        setShowModalDelete(true);
    };

    //ham delete user đối với trường hợp ko có database mới dùng cách này
    const DeleteUserModal = (user) => {
        const cloneListUsers = [...listUsers];
        const newListUsers = cloneListUsers.filter((item) => item.id !== user.id);
        setListUsers(newListUsers);
    };

    //show modal edit
    const handleShowEdit = (user) => {
        setDataUserEdit(user);
        setShowModalEdit(true);
    };

    return (
        <Fragment>
            <div className="my-5 d-flex justify-content-between align-items-center">
                <h3>List User</h3>
                <button type="button" className="btn btn-success" onClick={handleShowAddUser}>
                    Add New User
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers.length > 0 &&
                        listUsers?.map((item) => (
                            <tr key={item.id} className="text-center">
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-warning me-md-2"
                                            onClick={() => handleShowEdit(item)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => handleShowDeleteUser(item)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
            <ModalAddUser
                handleUpdateTable={handleUpdateTable}
                handleClose={handleClose}
                showModalAddUser={showModalAddUser}
            />
            <ModalEditUser
                showModalEdit={showModalEdit}
                handleClose={handleClose}
                dataUserEdit={dataUserEdit}
                handleUpdateEditUser={handleUpdateEditUser}
            />
            <ModalDeleteUser
                showModalDelete={showModalDelete}
                handleClose={handleClose}
                dataUserDelete={dataUserDelete}
                DeleteUserModal={DeleteUserModal}
            />
        </Fragment>
    );
};

export default TableUser;
