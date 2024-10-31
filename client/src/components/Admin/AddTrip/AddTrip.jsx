import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext.jsx";
import { DatePicker, Stack, Button } from 'rsuite';

import './AddTrip.css';
import 'rsuite/dist/rsuite.min.css';

const AddTrip = () => {
    const { tripRoutes, vehicles } = useContext(DataContext);    
    const [ trip_selection, setTripSelection ] = useState({
        vehicle_reg: "",
        route_id: "",
        departure: "",
        arrival: ""
    })

    const handSubmit = async () => {
        const empty_entry = Object.keys(trip_selection).filter(key => {
            if(trip_selection[key] === "") return key;
        });

        if(empty_entry.length > 0) {
            return alert("Please select all entries")
        }
        try {
            const response = await fetch('/api/admin/create_trip', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(trip_selection)
            });
            console.log(response)
            if(response.ok) {
                console.log("Trip added", response.statusText);
                alert('Trip Added')
                return;
            }
            alert("Trip not created");
        } catch (error) {
            console.error(`Server Error: ${error}`)
            alert('Trip not created: Server Error')
        }
    }


    const handleChooseVehicle = (e) => {
        setTripSelection(prev => ({
            vehicle_reg: e.target.value,
            route_id: prev.route_id,
            departure: prev.departure,
            arrival: prev.arrival
        }))
    };

    const handleChooseRoute = (e) => {
        setTripSelection(prev => ({
            vehicle_reg: prev.vehicle_reg,
            route_id: e.target.value,
            departure: prev.departure,
            arrival: prev.arrival
        }))
    };

    const handleChooseStartTime = (value, e) => {
        setTripSelection(prev => ({
            vehicle_reg: prev.vehicle_reg,
            route_id: prev.route_id,
            departure: value,
            arrival: prev.arrival
        }))
    };

    const handleChooseEndTime = (value, e) => {
        setTripSelection(prev => ({
            vehicle_reg: prev.vehicle_reg,
            route_id: prev.route_id,
            departure: prev.departure,
            arrival: value
        }))
    };

    return (
        <div className="add-trip-form">
            <h2 className="heading">Fill Trip Information</h2>
            <div className="selects">
                <div className="route">
                    <h3>Pick Route</h3>
                    <select onChange={handleChooseRoute} className="route-select">
                        {
                            tripRoutes.map((route, idx) => {
                                return (
                                    <option 
                                        key={`${idx}`}
                                        value={`${route.route_id}`}
                                    >
                                        { `${route.start_point}-${route.end_point}`}
                                    </option>
                                )
                                        
                            })
                        }
                    </select>
                </div>

                <div className="vehicle">
                    <h3>Pick Vehicle</h3>
                    <select onChange={handleChooseVehicle} className="vehicle-select">
                        {
                            vehicles.filter(vehicle => vehicle.onJourney === false).map((vehicle, idx) => {
                                
                                return (
                                    <option key={`${idx}`}>
                                        { vehicle.vehicle_reg}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <Stack 
                style={{ 
                    marginTop: '2em', 
                }} 
                spacing={80} 
                direction="row" 
                justifyContent="center"
            >
                <DatePicker onChange={handleChooseStartTime} label="Start Time" size="lg" format="MM/dd/yyyy HH:mm" />
                
                <DatePicker onChange={handleChooseEndTime} label="ETA" size="lg" format="MM/dd/yyyy HH:mm" />
            </Stack>

            <div className="send-it">
                <Button 
                    onClick={handSubmit}
                    style={{
                        height: '2.5em',
                        width: '40%',
                        backgroundColor: "#080814",
                        color: "#fff",
                        cursor: 'pointer'
                    }}
                >Submit</Button>
            </div>
        </div>
    )
};



export default AddTrip;