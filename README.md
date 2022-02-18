# MOTORWASH APPOINTMENT APP

This project is a real world application solving the problem of car maintenance. Car maintenance is a vital part of our daily lives, since we lways drive our vehicles it is only prudent to maintain the car for a longer life span. Here at Motorwash we give you the opportunity to book appointment at your convinience. You have the opportunity to pick a date and time for your vehicle to be maintain and cleaned

## How to use this application

This application is in two faces; Ruby on Rails API backend and a React Client Application. 
- `Git clone the application`
- `bundle install app ruby gems in the application`
- `create a database and tables -> rails db:create db:migrate`
- `run the API server -> rails s and it will be on http://localhost:3000`
- `next we nagicate into the motorwash-client direcotry`
- `run npm i to install all the packages`
- `run npm start to start the UI`

### Backend API
The API consist of 2 tables/models, namely: `User` and `Booking`
The User table contains all the information about the client; ie. client name, email, password, location, address1, address1, mobile.
These information is extracted when a Client makes an appointment

The Booking table contains the time and date of the expected maintenance. Once a confirmation is received. There will be a follow up from and your vehicle
will be worked on

### Tools
- [ ] Ruby on Rails (7.0.1)
- [ ] Ruby (2.7.3)
- [ ] Postgresql
- [ ] React (17.0.2)
- [ ] Axios


### React Hooks
- [ ] UseState
- [ ] UseEffect
- [ ] UseParams

