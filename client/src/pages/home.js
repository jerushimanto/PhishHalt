import React from 'react';
import NavBar from "../components/navbar";
import Hand from '../images/hand.jpg';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import './home.css';

function Home(){
  const navigate = useNavigate(); // Create navigate instance

  // Function to navigate to /check route
  const handleCheckClick1 = () => {
    navigate('/check');
  }
  const handleCheckClick2 = () => {
    navigate('/info');
  }

  return (
    <div>
      <NavBar active="home"/>
      <div className="context-grid">
        <div className="item_abc" id="item1">
          <img src={Hand} width="100%" height="100%" alt="hand"></img>
        </div>
        <div id="item2" className="item">
          <h1>Brief of PhishHalt</h1>
          <p className="description">
            PhishHalt is a sophisticated solution designed to identify and halt phishing websites.
            It leverages a fine-tuned BERT model, enhanced with additional layers, to provide accurate predictions.
            The model analyzes website URLs and content patterns, ensuring that potential phishing threats are detected
            swiftly and efficiently. Secure your browsing with PhishHalt!
          </p>
        </div>
      </div>
      <div id="buttons-container">
        <button className="context-buttons" onClick={handleCheckClick2}>Discover More</button>
        <button className="context-buttons" onClick={handleCheckClick1}>Check URL</button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

