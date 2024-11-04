import { Link } from "react-router-dom";
import AddTrip from "../../components/Admin/AddTrip/AddTrip.jsx";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { Button } from 'rsuite';

import './AdminHome.css';
import ViewTrips from "../../components/Admin/ViewTrips/ViewTrips.jsx";

const AdminHome = () => {
    const [ currentPage, setCurrentPage ] = useState('AddTrip');

    
    return (
        <div className="admin-home">
            <Header />
            <main>
                <div className="select-page">
                    <Button 
                        onClick={() => setCurrentPage('AddTrip')}
                        style={{ 
                            backgroundColor: "#080814",
                            color: "#fff",
                            width: "30%"
                        }}
                    >Add Trip</Button>

                    <Button 
                        onClick={() => setCurrentPage('ViewTrips')}
                        style={{ 
                            backgroundColor: "#080814",
                            color: "#fff",
                            width: "30%"
                        }}
                    >View Scheduled Trips</Button>
                </div>
                
                {
                    currentPage === 'AddTrip' ? <AddTrip /> : <ViewTrips />
                }
            </main>
        </div>
    )
};


export default AdminHome;