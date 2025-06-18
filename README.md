# amand-milette-capstone

# Comfort Companions Pet Care

## Overview

- Make myself a platform to accept bookings & clients for pet care services I offer to my community.

### Problem Space

- I want to help spread the word about my pet care services outside of similar existing apps like Rover to help those in my community who don't have access to that app.

### User Profile

-myself - tracking client information, updating my calendar availability for clients

- pet owners looking for care services, calendar booking.

### Features

- calendar
- create new booking
- update booking
- delete booking
- responsive design for mobile, tablet & desktop views
- button for my bookings to show my side versus clients

## Implementation

### Tech Stack

- React
- node
- express
- JSON
- mySQL

### APIs

- most likely creating APIs from scratch for this project.

### Sitemap

- main - calendar where bookings can be created
- about - description of services provided & myself, contact
- bookings - list of my current bookings, where bookings can also be deleted (updates are nice to have)

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

![](/src/assets/Pet%20sitting%20app%20wireframe%20version%201.jpg)

### Data !

body example:

{
"booking_id": 1,
"owner_name": "",
"pet_name": "",
"pet_description": "",
"category": "Boarding",
"timestamp": "",
}

### Endpoints

GET bookings
POST bookings
PUT booking (nice to have)
DELETE booking

## Roadmap

Sprint 1 = build out structure of the site week 1 (react, github repo, replace vite readme with this content, wireframe mockup of the pages, react router setup, components, mobile first styling, hard coded data JSON file)

Sprint 2 = (calendar & form functionality for users, back-end repo setup, express, JSON data file for bookings, routes, endpoints, integration of front and back end)

Sprint 3 = (apply feedback, styling for tablet & desktop, fixing errors or error handling, add nice to haves if time is available)

## Future Implementations

- Booking Details Pages & Media Upload
- Implement Responsive Design
- Update & Delete Bookings
- About Contact Form
- Invoice & Payment Functionality
