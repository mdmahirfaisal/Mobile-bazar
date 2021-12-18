import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Swal from 'sweetalert2'

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';




const tableStyle = {
    borderRight: '1px solid gray'
}
const ManageProduct = () => {
    const [manageProductsAdmin, setManageProductsAdmin] = React.useState([]);

    React.useEffect(() => {
        fetch('https://mysterious-waters-68327.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProductsAdmin(data))
            .catch(error => Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: `Set to ${error}`,
                showConfirmButton: false,
                timer: 3000
            }));
    }, []);


    // handle delete 
    const handleDeleteProduct = (id) => {
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
                const url = `https://mysterious-waters-68327.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const available = manageProductsAdmin.filter(managePd => managePd._id !== id);
                            setManageProductsAdmin(available);

                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'This Product has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'this file is safe :)',
                    'error'
                )
            }
        })
    };

    let navigate = useNavigate();

    // update product
    const handleUpdateProduct = (id) => {
        const url = `/dashboard/editProduct/${id}`
        navigate(url);
    }
    return (
        <div>
            <h1 className="fw-bold text-primary my-4">MANAGE PRODUCTS</h1>
            <div className="container">
                <Paper elevation={5} sx={{ width: '100%', overflow: '', padding: '', borderRadius: '20px' }}>
                    <TableContainer className='' sx={{ backgroundColor: '', borderRadius: '20px' }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={tableStyle} align="left">Image</TableCell>
                                    <TableCell style={tableStyle} align="left">Product</TableCell>
                                    <TableCell style={tableStyle} align="left">Description</TableCell>
                                    <TableCell style={tableStyle} align="left">$ Price</TableCell>
                                    <TableCell align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {manageProductsAdmin?.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                    >
                                        <TableCell style={tableStyle} align="left"><img src={row?.img} alt="product img" className="" style={{ height: '50px' }} /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.name} <br /></TableCell>
                                        <TableCell className=" fs-6" style={tableStyle} align="left">{row?.description.slice(0, 20)} <br /></TableCell>
                                        <TableCell className="fw-bold fs-5 text-danger" style={tableStyle} align="left">$ {row?.price}</TableCell>
                                        <TableCell className="fw-bold fs-5 text-info bg-light" align="left">
                                            <button className="btn btn-outline-info py-1 mb-2 me-2 " onClick={() => handleUpdateProduct(row._id)} ><i className="fas fa-edit me-1"></i> Update</button>
                                            <button className="btn btn-outline-danger mb-2  py-1" onClick={() => handleDeleteProduct(row._id)}><i className="fas fa-trash-alt me-1"></i> Delete</button>

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

export default ManageProduct;