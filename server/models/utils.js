
const carRegistrations = {
    "ABC 123": 10,
    "DEF 456": 10,
    "GHI 789": 10,
    "JKL 012": 10,
    "MNO 345": 10,
    "PQR 678": 10,
    "STU 901": 10,
    "VWX 234": 34,
    "YZA 567": 34,
    "BCD 890": 34
};


function generateSeats(carRegistrations) {
    let seats_array = [];

    let seatnumber = 1;

    for(let car_reg of Object.keys(carRegistrations)) {
        let capacity = carRegistrations[car_reg]
        while(capacity >= 1) {
        
            seats_array.push({ seat_num: seatnumber, vehicle_reg: car_reg })
            capacity -= 1;
            seatnumber += 1;
        }
        seatnumber = 1
    }

    return seats_array;
}

const CAR_SEATS = [ ...generateSeats(carRegistrations) ];

module.exports = { CAR_SEATS };