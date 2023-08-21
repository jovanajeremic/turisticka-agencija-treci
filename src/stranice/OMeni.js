import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from "react-bootstrap";
import jovana from "../slike/jovana.jpeg";

const OMeni = props => {
    return (
        <>
            <Row className="m-3">
                <Col>
                    <img src={jovana} className="img img-fluid" alt="Jovana Jeremic"/>
                </Col>
                <Col>
                    <h1 className="text-center">Jovana Jeremic</h1>
                    <p>Studiram na 4. godini Fakulteta Organizacionih nauka. Ovaj sajt je napravljen za potrebe 3eg domaceg zadatka iz predmeta Internet Tehnologije.</p>
                </Col>
            </Row>
        </>
    );
};

OMeni.propTypes = {

};

export default OMeni;