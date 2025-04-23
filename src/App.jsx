import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/index.jsx';
import Hero from './components/Hero/index.jsx';
import AboutUs from './components/AboutUs/index.jsx';
import ContactUs from './components/ContactUs/index.jsx';
import WhyChooseUs from './components/WhyChooseUs/index.jsx';
import Footer from './components/Footer/index.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a 2-second loading delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup the timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    // Loading screen component
    const LoadingScreen = () => (
        <div className={`loading-screen ${isLoading ? 'fade-in' : 'fade-out'}`}>
            <h2>Royal King</h2>
            <div className="spinner"></div>
        </div>
    );

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <div className="main-content fade-in">
                    <Navbar />
                    <Hero />
                    <AboutUs />
                    <ContactUs />
                    <WhyChooseUs />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;