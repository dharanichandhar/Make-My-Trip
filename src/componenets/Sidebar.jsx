import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebarstyle'>
            <div className='d-flex flex-column align-items-center justify-content-between h-100'>
                <div className='w-100'>
                    <h5 className='py-3 text-center'>DC Flight</h5>

                    <nav className='sidebar-links '>
                        <ul>
                            <li className='active'><a href="#">Home</a></li>
                            <li><a href="#">Ticket</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </nav>
                </div>
            <nav className='sidebar-links '>
                <ul className='settings'>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
            </div>
        </div>
    );
};

export default Sidebar;
