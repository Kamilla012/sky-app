# sky-app
SkyApp
SkyApp is an application designed for astronomy enthusiasts, providing access to various information about satellites and interactive sky observation features.

Technologies
The application is built using the following technologies:

-React: Utilized for building the user interface.
-MongoDB: Database storing information about satellites and planets.
-Tailwind CSS: CSS framework facilitating rapid and responsive styling.
-Leaflet: JavaScript library for rendering interactive maps.
Features
Satellite Search
The application allows users to retrieve information about satellites by entering the satellite's name or country name in the search bar. All available data is fetched from our MongoDB database.

Satellite Tracking on Map
With an interactive map generated using the Leaflet library, users can track the current position of selected satellites. The map displays the real-time location of satellites.

Star Constellation Generator
The application utilizes an API to generate individual star constellations, allowing users to explore the sky from the comfort of their homes.

Planet Information
Additionally, the application retrieves information about planets from the database. By clicking on a specific planet on the interactive map or by entering the planet's name in the search bar, users receive detailed data about the selected planet.

Blog
During the application's development, we plan to add a feature that enables users to add blog posts and browse existing posts. The blog will contain engaging articles related to astronomy.

User Authentication
User authentication functionality is also planned for development, allowing users to access additional features and personalization.


Installation
To install and run the application locally, follow these steps:

Clone the repository to your local machine.
Navigate to the application directory.
Install all dependencies using the command npm install.
Start the application using the command npm start
Move to the api folder and use command node index.js
