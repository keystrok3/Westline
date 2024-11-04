

import moment from 'moment';

/**
 * Check if given datetime is in range
 * @param - start, end, timeToCheck
*/
export function timeInRange(start, end, timeToCheck) {
    // Define the datetime to check
    const toCheck = moment(timeToCheck);

    // Define the start and end of the range
    const start_time = moment(start);
    const end_time = moment(end);

    // Check if the time is within the range
    let timetocheck = toCheck.isBetween(start_time, end_time);
    console.log(`Time to check: ${timetocheck}`)
    return timetocheck;
}

