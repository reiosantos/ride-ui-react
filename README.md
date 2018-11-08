# Ride My Way

Ride-my App is a carpooling application that provides drivers with the ability to create ride offers
and passengers to join available ride offers.

## Motivation

This is driven by the increase in technology, which has proven to be more effective in time saving.
We there fore develop this app to apply tech in the transportation industry with the main purpose of saving m
ore and earning more.

## Build status, and test coverage

[![Build Status](https://travis-ci.org/reiosantos/ride-ui-react.svg?branch=develop)](https://travis-ci.org/reiosantos/ride-ui-react) [![Coverage Status](https://coveralls.io/repos/github/reiosantos/ride-ui-react/badge.svg?branch=develop)](https://coveralls.io/github/reiosantos/ride-ui-react?branch=develop)

### [Heroku Link](https://ride-ui-react.herokuapp.com/)

***Features***

 * Users (Driver and passenger) can fetch all ride offers
 * Users can fetch a specific ride offer
 * Driver creates a ride offer
 * Passengers make a request to join a ride.
 * Driver can deletes and update ride offer

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes.

### Prerequisites
This describes things needed to install the software.

```bash
- git : to update and clone the repository
- nodejs and npm : The are needed for development purposes
```

### Installing for testing and production

```bash
Type: "git clone https://github.com/reiosantos/ride-ui.git" in your terminal.
```
To access the user interface, open the index.html file inside folder

### Planning for Development

- To install the requirements needed for development. run:

```bash
npm install
```

To build the app after modifications you can run .

```bash
npm run build
```

The UI can be put under the apache web root and accessed from there.

If you put the build folder inside the web root dir. Then,

- You can access the system api via this URL:

```http
http://localhost/build/
```

#### Signup page:

- This enables a user to create an account as either a driver or a passenger.

![image](https://drive.google.com/uc?export=view&id=1jNe4jpUgemN6MFIadBcCZG4py0pX0Rta)

#### Login Page

![image](https://drive.google.com/uc?export=view&id=1Je0qSYtivg3GWW9DZ7FAuLWSPersqIDg)


#### Driver Page

![image](https://drive.google.com/uc?export=view&id=1v2YkEIyKIuYjyAW0RGJAaW3epP5ezwUr)

#### Passenger's Page


![image](https://drive.google.com/uc?export=view&id=1o7o4WeHsJ3T9nI-AkA-6loVmniaF2OFT)

## Built With

* Material-UI
* React/Redux

## Authors

* **Ssekitto Ronald** - *Initial work* - [reiosantos](https://github.com/reiosantos)

## Acknowledgments

* Andela Software Development Community
* Inspiration
* TTL: Kanyesigye Edgar
