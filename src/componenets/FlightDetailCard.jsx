import React from 'react'
import Card from 'react-bootstrap/Card';
import { BsThreeDots } from "react-icons/bs";

function FlightDetailCard({ flight }) {
  return (
   <div>
     <Card >
      <Card.Body  >
        <div className='d-flex justify-content-between align-items-center mb-2' >
            <Card.Title className='text-primary fs-6 mb-1 '><time>{flight.departure.time}</time>-<time>{flight.arrival.time}</time></Card.Title>
            <span className='fs-5'><BsThreeDots /></span>
        </div>
      
         <div className='d-flex align-items-center gap-3 justify-content-between'>
          <div className='d-flex align-items-center gap-3 '>
            <img  width={50} src="https://c8.alamy.com/comp/2CBDA70/flying-aeroplane-over-the-world-symbol-concept-travel-logo-design-vector-illustration-2CBDA70.jpg" alt="flight" className='rounded-circle' />
            <div>
              <h5 className='mb-2'>{flight.airline}</h5>
              <h6 className='mb-3 text-success'>{flight.flight_id} · {flight.flight_duration} · {flight.cabin_class}</h6>
            </div>
          </div>

          <div className='text-end'>
             <h5 className='mb-2'>{flight.price.currency} {flight.price.amount}</h5>
              <h6 className='mb-3 text-secondary fs-6'>Price</h6>

          </div>

         </div>
      </Card.Body>
    </Card>
  </div>
  )
}

export default FlightDetailCard