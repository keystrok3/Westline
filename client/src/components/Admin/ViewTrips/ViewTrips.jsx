import { useContext } from "react"
import { DataContext } from "../../../context/DataContext"
import moment from 'moment';

import './ViewTrips.css'
import { timeInRange } from "../../../utils/datetime_fxns";

const ViewTrips = () => {

    const { trips } = useContext(DataContext); // vehicle_reg, departure_time, arrival_time


    return (
        <div className="view-trips">
            <table>
                <thead>
                    <tr>
                        <td>Vehicle Registration</td>
                        <td>Departure Time</td>
                        <td>Estimated Time of Arrival</td>
                        <td>En Route?</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map((trip, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{trip.vehicle_reg}</td>
                                    <td>{moment(trip.departure_time).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{moment(trip.arrival_time).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                    <td>{
                                        timeInRange(trip.departure_time, trip.arrival, new Date()) ? "YES" : "NO"
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};



export default ViewTrips