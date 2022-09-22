import React, { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { GetAllUsers } from '../Api/User-Api';

const TableUser = () => {
    const [ListUsers, SetListUsers] = useState([]);
    const getUsersData = async () => {
        try {
            const respones = await GetAllUsers();
            if (respones && respones.data) {
                SetListUsers(respones.data);
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
    return (
        <Fragment>
            <div className="my-5 d-flex justify-content-between align-items-center">
                <h3>List User</h3>
                <button type="button" className="btn btn-success">
                    Add New User
                </button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    {ListUsers.length > 0 &&
                        ListUsers?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </Fragment>
    );
};

export default TableUser;
