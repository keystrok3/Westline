
# Westline Bus and Shuttle Service Ticketing Web Application

## Requirements
1. A company website with a ticketing service.
2. Register users
3. Allow users:
    - to buy bus tickets and book vehicles.
    - to cancel tickets when applicable.
    - to access travel information e.g., which vehicles are available,
      arrival and departure times, and which seats are available.
    - to download and possibly print tickets.
        N/B: there has to be a way to track printed tickets.

## Database Design (Database Name: westline_db)
### Entities:
1. Users (firstName, lastName, user_id (ID/Passport No.))
2. Destinations (destination_id, name, county)
3. Vehicles (vehicle_id, registration_number, vehicle_number, max_passengers)
4. Routes (route_id, start_point (destinantion_id), destination (destinantion_id), fare)
5. Trips (trip_id, route_id, vehicle_id, departure_datetime, arrival_datetime)
6. user_trip (user_trip_id, user_id, trip_id, ticket_number, isTicketingActive)
7. Tickets (ticket_id, purchase_price)
8. Seats (seat_num, vehicle_id)

### How a user gets a new user_trip:
1. Selects trip.
2. Pays.
3. A new ticket is generated with the following details: 
    names, id/passport, start_datetime, start and end point, purchase_price.

