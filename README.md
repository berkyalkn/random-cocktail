# Cocktail Recipe Web App

This web app fetches random cocktail recipes from TheCocktailDB API and displays the cocktail name, ingredients, instructions, and image. It uses **Express.js** for the backend and **EJS** for rendering dynamic content.

## Features

- Fetches random cocktail data from [TheCocktailDB API](https://www.thecocktaildb.com/api.php)
- Displays cocktail name, category, alcoholic or non-alcoholic status, glass type, ingredients, and instructions
- Includes an image of the cocktail
- Fully responsive design
- Interactive button to fetch new random cocktails

## Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML, CSS, EJS
- **API**: [TheCocktailDB API](https://www.thecocktaildb.com/api.php)
- **Other**: Axios for HTTP requests

## Getting Started

### Prerequisites

To run this project, you'll need to have **Node.js** installed. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/berkyalkn/random-cocktail.git

2. Navigate to the project directory
   ```
   cd random-cocktail

3. Install Dependincies

   ```
   npm install

### Running the Project

To run the project locally :

1. Start the server 
   ```
   node --watch index.js

2. Open your browser and visit http://localhost:4000 to see the app in action.

### How It Works

- The app uses Axios to make a request to TheCocktailDB API when the page is first loaded to display a random cocktail. It fetches the cocktail details and passes them to the EJS template for rendering on the frontend.

- When the "RANDOM COCKTAIL" button is clicked, the app makes another API request via Axios to get a new random cocktail and updates the page dynamically without refreshing it.






