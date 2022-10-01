import React from 'react';
import Feature from './Components/Feature';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Marketplace from './Components/Marketplace';
import Nav from './Components/Nav';
import Navbar from './Components/Navbar';
import Popular from './Components/Popular';

const App = () => {
    return (
        <div>
            <Nav/>
           {/* <Navbar/> */}
           <Header/>
           <Marketplace/>
           <Feature/>
           <Popular/>
           <Footer/>
        </div>
    );
};

export default App;