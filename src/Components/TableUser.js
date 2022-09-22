import React, { Fragment } from 'react';
import Table from 'react-bootstrap/Table';

const TableUser = () => {
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
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </Fragment>
    );
};

export default TableUser;
