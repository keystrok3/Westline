import { Link } from "react-router-dom";
import AddTrip from "../../components/Admin/AddTrip/AddTrip.jsx";
import Header from "../../components/Header/Header";
import { useState } from "react";
import { Button } from 'rsuite';

import './AdminHome.css';

const AdminHome = () => {
    const [ currentPage, setCurrentPage ] = useState('AddTrip')
    return (
        <div className="admin-home">
            <Header />
            <main>
                <div className="select-page">
                    <Button style={{ 
                        backgroundColor: "#080814",
                        color: "#fff",
                        width: "30%"
                        }}
                    >Add Trip</Button>

                    <Button style={{ 
                        backgroundColor: "#080814",
                        color: "#fff",
                        width: "30%"
                        }}
                    >View Scheduled Trips</Button>
                </div>
                <AddTrip />
            </main>
        </div>
    )
};


export default AdminHome;