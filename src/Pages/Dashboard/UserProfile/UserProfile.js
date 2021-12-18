import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFirebase from '../../../hooks/useFirebase';
import './UserProfile.css';



const UserProfile = () => {
    const { user, logOut } = useFirebase();

    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to Logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Logout'
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                navigate('/')
                Swal.fire(
                    'Login out',
                    'Logout successfully.',
                    'success'
                )
            }
        })
    }
    return (
        <section>
            <h2 className='text-secondary fw-bold mb-5'>YOUR PROFILE</h2>
            <div className='user-profile-container'>
                <div class="profile-container">
                    <div class="profile-card">
                        <div class="profile-image">
                            <img src={user.photoURL} className='img-fluid' style={{ minHeight: '200px' }} alt='User' />
                        </div>
                        <div class="content">
                            <h3 className='m-0 p-0 text-secondary fw-bold'>{user?.displayName || "User name"}</h3>
                            <h6 className='text-secondary mb-5 fw-light'>{user?.email || "User email"}</h6>
                            <button onClick={handleLogout} className='login-button text-center mx-auto mb-3'>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;