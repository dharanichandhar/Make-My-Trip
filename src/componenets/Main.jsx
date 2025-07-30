import React from 'react'
import FlightSearchCard from './FlightSearchCard'
import FlightDetailCard from './FlightDetailCard'
import FlightDetailSlider from './FlightDetailSlider'
import axios from 'axios';
import { useState } from 'react';
import Lottie from "lottie-react";
import animationLoading from '../assets/Flight loading.json';
import flightNotFound from '../assets/flight not found.json';
import FilterSection from './FilterSection';

function Main() {

  const [userData, setUserData] = useState({
    from: '',   
    to: '',
    date: '',
    cabin_class: '',
    airline : '',
    min_price:''
})


  const [flights, setFlights] = useState([]);
  const [singleData, setSingleData] = useState();
  const [loading, setLoading] = useState(true);
  const [LoadingImage, setLoadingImage] = useState(animationLoading);


  const getApiData = async () => {
    setLoadingImage(animationLoading);
    const response = await axios.get(`http://localhost:3000/flights?from=${userData.from}&to=${userData.to}&date=${userData.date}&cabin_class=${userData.cabin_class}&airline=${userData.airline}&price=${userData.min_priceprice}`);
    const flightsData = response.data.data;

    if (flightsData.length > 0) {
      setFlights(flightsData);
      setSingleData(flightsData[0]);
      setLoading(false);
    } else {
      setFlights([]);
      setSingleData(null);
      setLoading(true);
      setLoadingImage(flightNotFound);
    }

  };

  
const handleChange = (e) => {
    const {name, value}= e.target;
    setUserData({
        ...userData,
        [name]: value
    })
}

const resetFilter = () => {
    setUserData((prev)=>({
        ...prev,
        cabin_class: '',
        airline : '',
        min_price:''
    }))

    getApiData();
    
}


return (
  <div className='row'>
    {/* Left section: Search + Flight results */}
    
    <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>
      <FlightSearchCard getData={getApiData} handleChanges = {handleChange} from= {userData.from} to = {userData.to} date = {userData.date}/>

      {
        loading ? (
          <Lottie animationData={LoadingImage} style={{ height: "280px", width: "100%" }} />
        ) : (
          <>
            <div className='my-3 w-100'>
              <div className='d-flex align-items-center justify-content-between gap-3'>
                <div>
                  <p className='mb-1'>From</p>
                  <h4 className='mb-1'>{singleData.departure.from}</h4>
                  <p className='mb-1'>{singleData.departure.airport}</p>
                </div>

                <hr className='flex-fill' style={{ borderStyle: "dashed" }} />

                <div className='to-flight text-end'>
                  <p className='mb-1'>To</p>
                  <h4 className='mb-1'>{singleData.arrival.to}</h4>
                  <p className='mb-1'>{singleData.arrival.airport}</p>
                </div>
              </div>
            </div>

            
            <FlightDetailSlider className=''>
              {
                flights.map((flight) => (
                  <FlightDetailCard flight={flight}  />
                ))
              }
            </FlightDetailSlider>
           
          </>
        )
      }
    </div> {/* ✅ Close the left column div here — after all left content */}

    {/* Right section: Filter */}
    <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
      <FilterSection  handleChanges = {handleChange} cabin_class= {userData.cabin_class} airline = {userData.airline} min_price = {userData.min_price}  resetFilters={resetFilter}/>
    </div>
  </div>
);

  
}


export default Main