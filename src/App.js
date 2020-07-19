import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import MyCard from './MyCard'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {

  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await Axios.get('https://randomuser.me/api/');
    const details = data.results[0];
    setDetails(details);
  }
  
  useEffect(() => {
    fetchDetails();
  }, []);

  return(
    <React.Fragment>
      <h2 className="text-center px-2 mt-5 reactAppTitle">Random User API - Using AXIOS vcard</h2>
      <Container fluid className="p-4 vCardMainContainer">
        <Row>
          <Col className="cardCol">
            <MyCard details={details} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
