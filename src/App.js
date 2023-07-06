import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container,  Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          'https://api.unsplash.com/photos/?client_id=IdWIxoIkmBv7yVTLK-CrDauCL95mCLwoq7sT6HMBu_c'
        );
        setPhotos(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Container style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
      <h1>Gallery App</h1>
      
        {photos.map((photo) => (
          <Col sm={4} key={photo.id}>
            <img src={photo.urls.small} alt={photo.alt_description} />
          </Col>
        ))}
      
    </Container>
  );
};

export default App;
