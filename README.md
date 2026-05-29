# Rick and Morty SPA

Web application developed as a Single Page Application (SPA) using modular JavaScript, HTML, and CSS.

This project uses the Rick and Morty public API to display characters, episodes, and locations.

The application was created with an architecture organized by components, views, pages, and services, resulting in clean, reusable, and easy-to-maintain code.

## Technologies Used
- HTML5
- CSS3
- JavaScript ES6
- Vite
- Axios
- LocalStorage
- Rick and Morty API
## Features
- SPA navigation without page reloads
- API consumption with Axios
- Dynamic character rendering
- Episode and location display
- Reusable components
- Modular architecture
- Use of LocalStorage
- Responsive design
  
## Installation and Execution
- Clone the repository

git clone <repository-url>
- Navigate to the project folder

cd example-spa-main
-  Install dependencies

npm install
- Run the project

npm run dev
Project Structure
assets/

```txt
assets/
│
├── css/
│ └── styles.css
│
├── js/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── utils/
│ ├── views/
│ ├── app.js
│ └── router.js
```

## Main application file.

It is responsible for starting the project, loading the navbar, and running the routing system.

## router.js

Controls the navigation of the SPA.

Detects route changes and renders the corresponding pages without reloading the browser.

## Components 
### components/navbar.js

Renders the application's navigation bar.

### components/characterCard.js

Dynamically generates character cards, displaying information such as image, status, and species.

### components/characterLocation.js

Renders character location information.

### components/episodeCard.js

Dynamically displays episode information.

## Pages
### pages/home.js

Application homepage.

Gets characters from the API and renders them dynamically.

### pages/about.js

Renders the "About" section with general project information.

### pages/contacts.js

Displays the application's contact page.

### pages/episodes.js

Gets and displays information related to episodes of the series.

### pages/location.js

Gets and renders information about locations in the Rick and Morty universe.

## Services 
### services/api.js

Contains the functions responsible for consuming the Rick and Morty API and managing LocalStorage.

### services/httpClient.js

Configures the HTTP client using Axios to facilitate API requests.

### Utils utils/helpers.js

Includes reusable helper functions, such as dynamically loading HTML views and other project utilities.
## QUESTIONS

## Question 1
### How will you handle the state of locally created characters?

Characters will be managed using localStorage with functions within api.js.
The data is stored in arrays and then rendered again in the SPA.

## Question 2
### How will you differentiate between original and fictional characters?

Characters from the Rick and Morty API are stored in a different array than characters created in either arrays or local storage

## Question 3
### How will you synchronize the API, DOM, localStorage, and SPA rendering?

Router.js detects the route, the page retrieves data from api.js, and then the components render the information in the DOM.
If there are changes, localStorage is also updated.

## Question 4
### How will you avoid duplicating logic?

By separating responsibilities, and creating functions that can be reused:

api.js → requests and storage.

components/ → reusable cards.

helpers.js → helper functions.

## Question 5
### Which components can be reused?

navbar.js
characterCard.js
episodeCard.js
characterLocation.js

Because they render dynamic information on different pages without repeating code.


# Authors
- Ronaldo Rodriguez
- Oscar Corzo
- Habith De Leon
