import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Swal from 'sweetalert2'
import { mobileProducts } from '../../Products/Products/Products';


const tableStyle = {
    borderRight: '1px solid gray'
}
const MyOrders = () => {
    // const [bookings, setBookings] = React.useState([]);
    // console.log(bookings);

    React.useEffect(() => {
        // const url = `https://lit-citadel-97865.herokuapp.com/ordersData?email=${user.email}`;
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
        //     .catch(error => console.log(error))

    }, []);


    // handle delete 
    const handleDeleteOrder = (id) => {
        // const swalWithBootstrapButtons = Swal.mixin({
        //     customClass: {
        //         confirmButton: 'btn btn-success ms-2',
        //         cancelButton: 'btn btn-danger'
        //     },
        //     buttonsStyling: false
        // })
        // swalWithBootstrapButtons.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to delete this item!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonText: 'Yes, delete it!',
        //     cancelButtonText: 'No, cancel!',
        //     reverseButtons: true
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         const url = `https://lit-citadel-97865.herokuapp.com/orders/${id}`;
        //         fetch(url, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.deletedCount > 0) {
        //                     const available = bookings.filter(user => user._id !== id);
        //                     setBookings(available);

        //                     swalWithBootstrapButtons.fire(
        //                         'Deleted!',
        //                         'Your file has been deleted.',
        //                         'success'
        //                     )
        //                 }
        //             })

        //     } else if (
        //         result.dismiss === Swal.DismissReason.cancel
        //     ) {
        //         swalWithBootstrapButtons.fire(
        //             'Cancelled',
        //             'Your imaginary file is safe :)',
        //             'error'
        //         )
        //     }
        // })
    };
    return (
        <div style={{ backgroundColor: '#', padding: '' }} >
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
                            {mobileProducts.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell style={tableStyle} align="left"><img src={row.image} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                    <TableCell className=" fs-6" style={tableStyle} component="th" scope="row">
                                        {""}
                                    </TableCell>
                                    <TableCell className=" fs-6" style={tableStyle} align="left">{row.name} <br /> <small className="text-dark">{new Date(row.orderTime).toDateString()}</small> </TableCell>
                                    <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row.price}</TableCell>
                                    <TableCell className="fw-bold fs-5 text-info bg-light" align="left">{row?.status} <button onClick={() => handleDeleteOrder(row.id)} className="btn btn-danger  px-3 py-0 ms-lg-3 rounded-pill">Cancel</button> </TableCell>
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