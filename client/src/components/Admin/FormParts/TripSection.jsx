
import { useContext, useEffect } from "react"
import { DataContext } from "../../../context/DataContext"


const TripSection = () => {
    const { tripRoutes } = useContext(DataContext);

    useEffect(() => {
        console.log(tripRoutes)
    }, [ tripRoutes ])

    return (
        <div className="options">
            <select name="" id="">
                {
                    tripRoutes.map((route, idx) => {
                        return (
                            <option 
                                value={`${route.start_point} - ${route.end_point}`}
                                key={`${idx}`}
                            >
                               { `${route.start_point} - ${route.end_point}` } 
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
};

export default TripSection;