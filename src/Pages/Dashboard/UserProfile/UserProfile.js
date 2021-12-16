import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <section className='user-profile-container'>
            <div class="profile-container">
                <div class="profile-card">
                    <div class="profile-image">
                        <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" className='img-fluid' alt='User' />
                    </div>
                    <div class="content">
                        <h3 className='m-0 p-0 text-secondary fw-bold'>User name</h3>
                        <h6 className='text-secondary mb-5 fw-light'>User email</h6>
                        <button className='login-button text-center mx-auto mb-3'>Logout</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;