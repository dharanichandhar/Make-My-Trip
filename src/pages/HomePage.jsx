import React from 'react'
import Main from '../componenets/Main'
import Sidebar from '../componenets/Sidebar'


const HomePage = ()=>{
    return(
        <div className='d-flex gap-3'>
            <div className='w-20 '><Sidebar/></div> {/*sidebar */} 
            <div className='main-container '><Main /></div>   {/*main */} 
          


        </div>
    )
}

export default HomePage;
