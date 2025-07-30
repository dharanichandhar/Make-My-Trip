import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function FilterSection({getData , handleChanges , cabin_class, airline , min_price ,resetFilters}) {


  return (
    <div className='h-100'>
       <Card className='card-design  shadow h-100 ' >
                <Card.Body>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5>Filter</h5>

                     <Button  className='btn btn-color-primary' size='sm' type="button" onClick={resetFilters}>
                        Reset
                     </Button>
                </div>

                  
                    <div className='row'>
                        
                            <Form >
                                <Form.Group className="mb-2" >
                                    <Form.Label>Cabin Class</Form.Label>
                                    <select className="form-select" onChange={handleChanges} value={cabin_class} name="cabin_class" aria-label="Default select example">
                                             <option value="">Select capin class</option>
                                             <option value="First Class">First Class</option>
                                             <option value="Economy">Economy</option>
                                             <option value="Business">Business</option>
                                    </select>
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Price" onChange={handleChanges} value={min_price}  name='min_price'/>
                                </Form.Group>

                                <Form.Group className="mb-2" >
                                    <Form.Label>AirLine</Form.Label>
                                     <select className="form-select" onChange={handleChanges} value={airline} name="airline"  aria-label="Default select example">
                                             <option value="">Select AirLine</option>
                                             <option value="Air India">Air India</option>
                                             <option value="IndiGo">IndiGo</option>
                                             <option value="Go Air">Go Air</option>
                                    </select>
                                </Form.Group>
                               
                                
                            </Form>
                        </div>


                </Card.Body>
                {/* <Card.Footer >
                    <Button className='w-100 btn-color my-4' type="submit">
                                    Apply Filter
                                </Button>
                </Card.Footer> */}
            </Card>
      
    </div>
  )
}

export default FilterSection