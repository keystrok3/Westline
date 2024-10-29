import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import './AddTrip.css';
import VehiclesSection from "./FormParts/VehiclesSection.jsx";
import TripSection from "./FormParts/TripSection.jsx";
import DateTimeSection from "./FormParts/DateTimeSection.jsx";


const AddTrip = () => {
    const [ page, setPage ] = useState(1);

    const [ trip_selection, setTripSelection ] = useState({
        vehicle: "",
        route: "",
        departure: "",
        arrival: ""
    })


    

    return (
        <div className="add-trip-form">
            <TripSection />

            <div className="btn-box">
                <button className="submit-button">Submit</button>
            </div>
        </div>
    )
};



export default AddTrip;