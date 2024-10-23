# StreamShow

StreamShow is a web application built with React and Vite that allows users to discover movies and TV shows by fetching data from the public API of The Movie Database (TMDb).

### Want to see the project live? Click [here](https://imadouguaour.github.io/StreamShow/)

## Features

- Home page displaying the most popular movies and TV shows.
- Page listing only movies.
- Page listing only TV shows.
- Search for movies and TV shows: Allows users to search for movies and TV series.
- Movie/TV show details.

## Techs

StreamShow uses a number of open-source libraries to work properly:

- **ReactJs 'v18'**: For building the user interface.
- **TypeScript 'v5.5.4'**: For static typing and better developer tooling.
- **Redux-toolkit**: For global state management.
- **Axios**: Mor making HTTP requests to APIs
- **React-slick**: For creating responsive image carousels.
- **Tailwindcss**: For styling the application.
- **@testing-library/react**: For testing React components.
- **Vitest**: For running unit tests in the project.

## Installation

StreamShow requires [Node.js](https://nodejs.org/) v17+ to run.

To run this project, you need to create a `.env` file at the root of the project that will contain the following variables:

```sh
VITE_API_KEY=
```

You can obtain this API key by creating an account on [The Movie Database](https://www.themoviedb.org/) and generating a key in your account settings.

### Step-by-step installation instructions

1. Clone the repository:

   ```sh
   git clone https://github.com/ImadOuguaour/StreamShow.git
   ```

2. Navigate to the project folder:

   ```sh
   cd StreamShow
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Scripts

The following scripts are defined in the `package.json` file to streamline common development tasks:

- **dev**: Runs the local development server using Vite.

  ```sh
  npm run dev
  ```

- **predeploy**: Automatically builds the project before deploying it.

  ```sh
  npm run predeploy
  ```

- **deploy**: Deploys the project to GitHub Pages using `gh-pages`.

  ```sh
  npm run deploy
  ```

- **build**: Runs linting using ESLint, type checks the code with TypeScript, and then builds the project using Vite.

  ```sh
  npm run build
  ```

- **lint**: Lints the source code.

  ```sh
  npm run lint
  ```

- **preview**: Previews the production build locally.

  ```sh
  npm run preview
  ```

- **test**: Runs the unit tests using Vitest.
  ```sh
  npm run test
  ```

## License

MIT
