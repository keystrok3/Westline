import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../../context/DataContext"


const VehiclesSection = () => {
    const { vehicles } = useContext(DataContext);

    const [ selectedVehicle, setSelectedVehicle ] = useState("")

    const handleSelect = (e) => {
        setSelectedVehicle(e.target.value)
    };

    useEffect(() => {
        console.log(selectedVehicle)
    }, [ selectedVehicle] )

    return (
        <div className="options">
            <h3 style={{ textAlign: 'center', marginBottom: "1em"}}>Select Vehicle for Trip</h3>
            <div className="select-box">
                <select onChange={handleSelect} value={selectedVehicle} name="vehicles" className="select-vehicle" >
                    {
                        vehicles.map((vehicle, idx) => {
                            if(vehicle.onJourney) return;
                            return (
                                <option key={`${idx}`} value={`${vehicle.vehicle_reg}`}>
                                    {vehicle.vehicle_reg}
                                </option>                                           )
                        })
                    }
                </select>

                <div className="show-info-box">
                    <h3 style={{ textAlign: 'center'}}>Vehicle Info</h3>
                    <hr />
                    <div 
                        className="vehicle-info" 
                        style={{ 
                            display: "flex", 
                            flexDirection: "column", 
                            alignItems: 'center',
                            marginTop: '.5em', 
                            color: '#080814'}}
                        >
                        <p><b>Registration:</b> { selectedVehicle }</p>
                        <p>
                            <b>Capacity:</b> 
                            {  ` ${vehicles.find(item => item.vehicle_reg === selectedVehicle).capacity}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VehiclesSection;