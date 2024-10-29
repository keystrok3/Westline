
import { useEffect, useState } from 'react';
import { DatePicker, Stack } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const DateTimeSection = () => {
    const [ value, setValue ] = useState({
        departure: null,
        arrival: null
    });

    const handleChangeDep = (value, event) => {
        setValue(prev => ({ departure: value, arrival: prev.arrival }))
    };

    const handleChangeArriv = (value, event) => {
        setValue(prev => ({ departure: prev.departure, arrival: value }))
    };

    return (
        <div className='date-input'>
            <h3>Pick Departure and Estimated Arrival Times</h3>
            <hr />
            <div className="departure-time">
                <Stack spacing={10} direction="column" alignItems="center">
                    <DatePicker 
                        size='lg'
                        value={value.departure} 
                        onChange={handleChangeDep}  
                        format="MM/dd/yyyy HH:mm" 
                        placeholder="Departure"
                        color='#080814'
                    />
                </Stack>
            </div>
            
            <div className="arrival-time">
                <Stack spacing={10} direction="column" alignItems="center">
                    <DatePicker 
                        size='lg'
                        value={value.departure} 
                        onChange={handleChangeArriv}  
                        format="MM/dd/yyyy HH:mm" 
                        placeholder="Arrival"
                    />
                </Stack>
            </div>
        </div>
    );
};


export default DateTimeSection;