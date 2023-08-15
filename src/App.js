import { useState, useEffect } from 'react';
import Offers from './offers';
import Blog from './components/blog';
import BannerCarousel from './components/carousel';
import './App.css';
import React, { Component } from 'react';

function App() {
  const [offers, setoffers] = useState([]);
  const [newoffers, setNewoffers] = useState("");

  useEffect(() => {
    // update update the list of offerss
    // when the component is rendered for the first time
    update();
  }, []);

  // This function updates the component with the
  // current offers data stored in the server
  function update() {
    fetch(`${process.env.REACT_APP_BACKEND}api/offers?populate=*`)
      .then(res => res.json())
      .then(offers => {
        setoffers(offers.data);
      })
  }

  // This function sends a new offers to the server
  // and then call the update method to update the
  // component
  function addoffers(e) {
    e.preventDefault();
    let item = newoffers;
    let body = {
      data: {
        item
      }
    };

    fetch(`${process.env.REACT_APP_BACKEND}api/offers`, {
      method: "GET",
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(() => {
        setNewoffers("");
        update();
      })
  }

  return (
    <div className="app">
      <main>
        <h1>Strapi Playground</h1>
        <div>
          <BannerCarousel />
          <Offers offers={offers} />
          <Blog />
        </div>

      </main>
    </div>
  )
}
export default App;
