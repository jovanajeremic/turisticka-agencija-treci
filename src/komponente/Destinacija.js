import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";

const Destinacija = props => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.slika} />
                <Card.Body>
                    <Card.Title>{props.naziv}</Card.Title>
                    <Button onClick={() => { props.onClick();}} variant="primary">Ucitaj Destinaciju</Button>
                </Card.Body>
            </Card>
        </>
    );
};

Destinacija.propTypes = {
    slika: PropTypes.string.isRequired,
    naziv: PropTypes.string.isRequired,
    opis: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Destinacija;