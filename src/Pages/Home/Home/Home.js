import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Details from '../Details/Details';
import HomeProduct from '../HomeProduct/HomeProduct';
import MiniCard from '../MiniCard/MiniCard';
import PhoneParts from '../PhoneParts/PhoneParts';
import RaiseSection from '../RaiseSection/RaiseSection';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <div id='home' className="" style={{ height: '' }}>
                <Banner></Banner>
                <MiniCard></MiniCard>
                <PhoneParts></PhoneParts>
                <RaiseSection></RaiseSection>
                <HomeProduct></HomeProduct>
                <Details></Details>
                <Testimonials></Testimonials>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;