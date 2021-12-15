import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import MiniCard from '../MiniCard/MiniCard';
import PhoneParts from '../PhoneParts/PhoneParts';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <div id='home' className="" style={{ height: '' }}>
                <Banner></Banner>
                <MiniCard></MiniCard>
                <PhoneParts></PhoneParts>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;