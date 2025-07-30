import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function FlightSearchCard({getData , handleChanges , from, to, date}) {

const handleSumit = (e) => {
    e.preventDefault();
    getData();

}
    return (
        <div>

            <Card className='card-design  shadow'>
                <Card.Body>

                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Card.Subtitle className="mb-2 sub-title">Where would you want to go ?</Card.Subtitle>
                            <Card.Title className='fs-1'>Book a Flight</Card.Title>
                            <img src="https://media.istockphoto.com/id/936722270/photo/passenger-airplane-flying-above-clouds-view-from-the-window-plane-to-amazing-sky-at-the-sunset.jpg?s=612x612&w=0&k=20&c=_JqTWTMapwsOpi2HCBQOuCIdTChjLudqmyUOpntwuOo=" alt="Image not found" className='flight-img' />

                        </div>

                        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                            <Form onSubmit={(e) => handleSumit(e)}>
                                <Form.Group className="mb-2" >
                                    <Form.Label>From</Form.Label>
                                    <Form.Control type="text" placeholder="Chennai" onChange={handleChanges} value={from} name='from' />
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label>To</Form.Label>
                                    <Form.Control type="text" placeholder="Mumbai"  onChange={handleChanges} value={to} name='to'/>
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" onChange={handleChanges} value={date} name='date'/>
                                </Form.Group>
                               
                                <Button className='w-100 btn-color my-4' type="submit">
                                    Search
                                </Button>
                            </Form>
                        </div>

                    </div>

                </Card.Body>
            </Card>

        </div>
    )
}


export default FlightSearchCard