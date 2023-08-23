import React from 'react';
import PropTypes from 'prop-types';
import Destinacija from "./Destinacija";
import {Col} from "react-bootstrap";

const Destinacije = props => {

    const funkcija = (id) => {
        props.onClick(id);
    };


    return (
        <>
            {
                props.destinacije.map((destinacija, index) => {
                    return (
                        <Destinacija key={index} slika={destinacija.slika} naziv={destinacija.naziv} opis={destinacija.opis} onClick={() => funkcija(destinacija.id)} />
                    );
                })
            }


        </>
    );
};

Destinacije.propTypes = {
    destinacije: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Destinacije;