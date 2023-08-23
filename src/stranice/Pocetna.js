import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, Container, Row} from "react-bootstrap";
import podaci from "../podaci/podaci.js";
import Destinacije from "../komponente/Destinacije";
import UcitanaDestinacija from "../komponente/UcitanaDestinacija";

const Pocetna = props => {

    const [ucitanaDestinacija, setUcitanaDestinacija] = useState(podaci[0]);
    const [destinacije, setDestinacije] = useState(podaci);

    const onDestinacijaClick = (id) => {
        console.log(id);
        setUcitanaDestinacija(podaci.find(destinacija => destinacija.id === id));
    }

    const refPretraga = useRef();

    const pretrazi = () => {
        let pretraga = refPretraga.current.value;

        if (pretraga === "") {
            setDestinacije(podaci);
        }else{
            let pretragaDestinacije = podaci.find(destinacija => destinacija.naziv === pretraga);
            //console.log(pretragaDestinacije);
            if('undefined' == typeof pretragaDestinacije){
                alert('Nema destinacije sa tim nazivom');
                setDestinacije(podaci);
            }else{
                setDestinacije([pretragaDestinacije]);
            }
        }
    }

    return (
        <>
            <Container>
                <Row>
                    <h1 className="text-center">Pogledajte nase destinacije</h1>

                    <Col className="m-3" xs={12} md={6} lg={4}>
                        <UcitanaDestinacija destinacija={ucitanaDestinacija} />
                    </Col>
                    <Col className="m-3" md={6}>
                        <h3>Pretrazi destinacije</h3>
                        <input ref={refPretraga}  type="text" className="form-control" placeholder="Unesite naziv destinacije" />
                        <Button onClick={pretrazi} className="mt-3" variant="primary">Pretrazi</Button>

                        <Destinacije destinacije={destinacije} onClick={onDestinacijaClick} />
                    </Col>
                    </Row>
            </Container>


        </>
    );
};

Pocetna.propTypes = {

};

export default Pocetna;