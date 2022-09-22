import React, { Fragment, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { GetAllUsers } from '../Api/User-Api';
import Pagination from './Pagination';

const TableUser = () => {
    const [listUsers, setListUsers] = useState([]);
    const [pageCount, setPageCount] = useState(0);
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
                    {listUsers.length > 0 &&
                        listUsers?.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
        </Fragment>
    );
};

export default TableUser;
