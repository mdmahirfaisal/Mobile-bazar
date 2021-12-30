import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Swal from 'sweetalert2'

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'axios';

const tableStyle = {
    borderRight: '1px solid gray'
}

const ManageOrders = () => {
    const [allOrders, setAllOrders] = React.useState([]);

    React.useEffect(() => {
        fetch('https://mysterious-waters-68327.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
            .catch(error => {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'error',
                    title: ` ${error}`,
                    showConfirmButton: false,
                    timer: 3000
                })
            })
    }, []);


    const handleStatusChange = (id, status) => {
        let modifiedOrders = [];
        allOrders.forEach(order => {
            if (order._id === id) {
                order.status = status;
            }
            modifiedOrders.push(order)
        })
        setAllOrders(modifiedOrders);

        const modifiedStatus = { id, status }

        axios.put('https://mysterious-waters-68327.herokuapp.com/updateOrderStatus', modifiedStatus)
            .then(res => res.data && Swal.fire({
                position: 'top-middle',
                icon: 'success',
                title: `${status}`,
                showConfirmButton: false,
                timer: 3000
            }))
            .catch(error => Swal.fire({
                icon: 'error',
                title: ` ${error}`,
                showConfirmButton: false,
                timer: 3000
            }));
    }

    return (
        <div>
            <div className="container">
                <h1 className="fw-bold text-secondary">MANAGE ORDERS</h1>
                <Paper elevation={5}>
                    <TableContainer sx={{ backgroundColor: '', borderRadius: '20px' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableStyle} align="left">Image</TableCell>
                                    <TableCell style={tableStyle} align="left">Name</TableCell>
                                    <TableCell style={tableStyle} align="left">Product</TableCell>
                                    <TableCell style={tableStyle} align="left">$ Price</TableCell>
                                    <TableCell align="left">Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allOrders.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={tableStyle} align="left"><img src={row?.img} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} component="th" scope="row">
                                            {row?.email}
                                        </TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.name} <br /> <small className="text-dark">{new Date(row.orderTime).toDateString()}</small> </TableCell>
                                        <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row?.price}</TableCell>
                                        <TableCell className="fw-bold fs-5 text-info bg-light" align="left">

                                            <FormControl fullWidth>
                                                <InputLabel variant="standard" htmlhtmlFor="uncontrolled-native">
                                                    status
                                                </InputLabel>
                                                <NativeSelect
                                                    className={row.status === "pending" ? "btn btn-danger" : row.status === "on going" ? "btn btn-info" : row.status === "approve" ? "btn btn-success" : "btn btn-danger"}
                                                    defaultValue={row.status}
                                                    onChange={e => handleStatusChange(row._id, e.target.value)}
                                                >
                                                    <option className="bg-white text-muted">pending</option>
                                                    <option className="bg-white text-muted">on going</option>
                                                    <option className="bg-white text-muted">approve</option>


                                                </NativeSelect>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Paper>
            </div>

        </div>
    );
};

export default ManageOrders;