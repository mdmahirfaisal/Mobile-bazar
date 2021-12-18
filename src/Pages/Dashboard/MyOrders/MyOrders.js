import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Swal from 'sweetalert2'
import useFirebase from '../../../hooks/useFirebase';


const tableStyle = {
    borderRight: '1px solid gray'
}
const MyOrders = () => {
    const { user } = useFirebase()
    const [bookings, setBookings] = React.useState([]);
    React.useEffect(() => {
        const url = `https://mysterious-waters-68327.herokuapp.com/ordersData?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data)
            })
            .catch(error => {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'error',
                    title: ` ${error}`,
                    showConfirmButton: false,
                    timer: 3000
                })
            })

    }, [user.email]);


    // handle delete 
    const handleDeleteOrder = (id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ms-2',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this item!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://mysterious-waters-68327.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const available = bookings.filter(user => user._id !== id);
                            setBookings(available);

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'This item has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    };
    return (
        <div style={{ backgroundColor: '', padding: '' }} >
            <h1 className="fw-bold text-secondary py-3">MY ORDERS</h1>
            <Paper elevation={5} sx={{ width: '100%', overflow: '' }}>
                <TableContainer sx={{ backgroundColor: '#fff', borderRadius: '20px' }}>
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
                            {bookings.map((row) => (
                                <TableRow
                                    key={row._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={tableStyle} align="left"><img src={row.image} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                    <TableCell className=" fs-6" style={tableStyle} component="th" scope="row">
                                        {""}
                                    </TableCell>
                                    <TableCell className=" fs-6" style={tableStyle} align="left">{row.name} <br /> <small className="text-dark">{new Date(row.orderTime).toDateString()}</small> </TableCell>
                                    <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row.price}</TableCell>
                                    <TableCell className="fw-bold fs-5 text-info bg-light" align="left">{row?.status} <button onClick={() => handleDeleteOrder(row._id)} className="btn btn-danger  px-3 py-0 ms-lg-3 rounded-pill">Cancel</button> </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
};

export default MyOrders;