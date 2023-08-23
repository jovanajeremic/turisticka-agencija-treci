import React from 'react';
import PropTypes from 'prop-types';
import {Accordion, Alert, Badge} from "react-bootstrap";

const UcitanaDestinacija = props => {

    const izracunajProsecnuOcenu = () => {
        let suma = 0;
        props.destinacija.komentari.forEach(komentar => {
            suma += komentar.ocena;
        });
        return suma / props.destinacija.komentari.length;
    }

    return (
        <>
            <h1>Destinacija {props.destinacija.naziv}</h1>
            <p>{props.destinacija.opis}</p>
            <img className="img img-thumbnail" src={props.destinacija.slika} alt={props.destinacija.naziv} />
            <Accordion defaultActiveKey="0">
            {
                props.destinacija.komentari.map((komentar, index) => {
                    return (

                        <Accordion.Item key={index} eventKey={index}>
                            <Accordion.Header>{komentar.autor}  <Badge className="m-3" bg="secondary">{komentar.ocena}</Badge></Accordion.Header>
                            <Accordion.Body>
                                {komentar.tekst}
                            </Accordion.Body>
                        </Accordion.Item>
                    );
                })
            }
            </Accordion>

            <Alert variant="success">
                <Alert.Heading>Prosecna ocena: {izracunajProsecnuOcenu()}</Alert.Heading>
            </Alert>
        </>
    );
};

UcitanaDestinacija.propTypes = {
    destinacija: PropTypes.object.isRequired
};

export default UcitanaDestinacija;