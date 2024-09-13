import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import './info.css';


const Dets = () => {

    return (
        <div>
            <NavBar active="home" />
            <div className="inf">
                <h1 className="head0">BCSE415L - Human Computer Interaction Project<br/></h1>
                <h1 className="head01" >Project Name: PhishHalt<br/></h1>
            </div>
            <div className="inf">
        
                <h1 className="head1">Submitted by:<br/></h1>
                <h1 className="head2">Jerush Imanto M - 21BCE5389<br/></h1>
                <h1 className="head2">Venkat V - 21BCE5453<br/><br/></h1>

                <h1 className="head1">Submitted to:<br/></h1>
                <h1 className="head2">Dr. Premanand V</h1>
                
            </div>
            
            <Footer />
        </div>
    );
}

export default Dets;
