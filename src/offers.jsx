import React, { Component } from 'react';
import './App.css';
import Card from '@mui/material/Card';

function Offers({ offers }) {

    console.log("offers", offers)

    return <div className="offers">
        <h2>Offers</h2>
        <div className="d-flex card-offers">
            {
                offers.map((offer, i) => {
                    return <Card sx={{ width: 320 }}>
                        <img src={`${offer?.attributes?.image.data.attributes.url}`} alt="offer Image" />
                        <h3>{offer?.attributes?.title}</h3>
                        <p>{offer?.attributes?.description}</p>

                    </Card>
                })
            }
        </div>
    </div>
}

export default Offers;