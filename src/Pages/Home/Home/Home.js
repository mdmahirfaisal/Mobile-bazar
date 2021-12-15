import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <div className="" style={{ height: '' }}>
                <Banner></Banner>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;