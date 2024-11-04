/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { fetch_data } from "../apicalls/fetch_data";


export const DataContext = createContext();


const DataProvider = ({ children }) => {
    const [ tripRoutes, setTripRoutes ] = useState([]);
    const [ vehicles, setVehicles ] = useState([]);
    const [ destinations, setDestinations ] = useState([]);
    const [ trips, setTrips ] = useState([]);

    useEffect(() => {
        fetch_data('get_routes', setTripRoutes);
        fetch_data('get_vehicles', setVehicles);
        fetch_data('get_destinations', setDestinations)
        fetch_data('get_trips', setTrips)
    }, []);


    return (
        <DataContext.Provider
            value={{ tripRoutes, vehicles, destinations, trips }}
        >
            { children }
        </DataContext.Provider>
    )
};

export default DataProvider;