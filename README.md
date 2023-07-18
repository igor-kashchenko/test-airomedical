# Beer Recipes App
This is a React.js application that displays a list of beer recipes. Users can scroll through the list, select multiple recipes, delete selected recipes, and view individual recipe details.
## [DEMO](https://igor-kashchenko.github.io/test-airomedical/)

## Technologies Used
- React.js
- Zustand
- MUI
- Typescript
## Features
- List of Beer Recipes: On initial load, the application fetches a list of beer recipes from the [Punk API](https://api.punkapi.com/v2/beers?page=1) and displays them in a paginated manner. Each page contains 15 recipes.
- Multiple Selection: Users can select multiple recipes by right-clicking on them. Once a recipe is selected, a "Delete" button appears.
- Deletion: Clicking the "Delete" button removes the selected recipes from the list while ensuring that 15 recipes are always rendered.
- Deselection: Users can deselect a recipe by clicking on it again.
- View Recipe Details: Users can view the details of a single recipe by clicking on the recipe card with the left mouse button.
- Pagination: If there are no more recipes to show, the application automatically fetches another set of 25 recipes from the API.
### Getting started
- Clone repository: `git clone https://github.com/igor-kashchenko/test-airomedical>`
- Install dependencies: `cd test-airomedical npm install`
- Start the development server: `npm run dev`
