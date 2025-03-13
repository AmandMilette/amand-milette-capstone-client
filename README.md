# amand-milette-capstone

# Project Title

## Overview

What is your app? Give a brief description in a couple of sentences.

- Make myself a platform to accept bookings & clients for pet care services I offer to my community.

### Problem Space

Why is your app needed? Give any background information around any pain points or other reasons.

- I want to help spread the word about my pet care services outside of similar existing apps like Rover to help those in my community who don't have access to that app.

### User Profile

Who will use your app? How will they use it? Add any special considerations that your app must take into account.

-myself - tracking client information, updating my calendar availability for clients

- pet owners looking for care services, calendar booking.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- calendar
- create new booking
- update booking
- delete booking
- responsive design for mobile, tablet & desktop views
- button for my bookings to show my side versus clients

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

- React
- node
- express
- JSON
- mySQL

### APIs

List any external sources of data that will be used in your app.

- most likely creating APIs from scratch for this project.

### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- main - calendar where bookings can be created
- about - description of services provided & myself, contact
- bookings - list of my current bookings, where bookings can also be deleted (updates are nice to have)

### Mockups

Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

![](/src/assets/Pet%20sitting%20app%20wireframe%20version%201.jpg)

### Data !

Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.
(JSON structure, or seed data)

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

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

GET bookings
POST bookings
PUT booking (nice to have)
DELETE booking

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

Sprint 1 = build out structure of the site week 1 (react, github repo, replace vite readme with this content, wireframe mockup of the pages, react router setup, components, mobile first styling, hard coded data JSON file)

Sprint 2 = (calendar & form functionality for users, back-end repo setup, express, JSON data file for bookings, routes, endpoints, integration of front and back end)

Sprint 3 = (apply feedback, styling for tablet & desktop, fixing errors or error handling, add nice to haves if time is available)

## Future Implementations

Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date.
