# Welcome to AlgoActive's GitHub Repository!

AlgoActive is a web application that seeks to create supplementary material to established algorithms and data structures instruction that broadens the accessibility of the topic to kinesthetic learners.\
This is an independent work project from Princeton University undergraduate COS student John Hart.\
You can access AlgoActive [here](https://algoactive.herokuapp.com/)!\
AlgoActive is a Node.js application powered by React that uses the npm package manager. It utilizes a variety of different packages to improve the interactability and usability of the application. Some packages currently have conflicts with each other, so it requires a special set of actions to operate on. For directions, see the "Getting Started with AlgoActive" section. For description of this repository's layout, see the "Navigating This Repository" section.

# Navigating This Respository

There are a few branches present in this repository: 'main', 'heroku', and 'react-testing'.

## `main`

This is the main branch. Code here reflects the most recent WORKING version of AlgoActive. Most likely, this will be the same version seen in the 'heroku' branch, but it is not guaranteed. This is the recommended branch for you to use code from, as I will maintain the invariant that this branch has fully functioning and complete code.

## `heroku`

This is the branch the Heroku server automatically deploys from. Code here reflects the most recent DEPLOYED version of AlgoActive. This branch will always be guaranteed to have working code, but it may fall behind the 'main' branch at times. For these reasons, I recommend that you do not attempt to use code or files from this branch unless you are fine with working on a previous version

## `react-testing`

This is the development branch. Code here reflects what is currently being worked on in AlgoActive. As such, there is no guarantee that code from this branch will function correctly or completely. For these reasons, I recommend that you do NOT attempt to use code or files from this branch.

# Getting Started with AlgoActive

## Necessary Steps

Firstly, you should make sure to have the latest version of Node.js and npm installed on your computer. Next, you should create a directory and import all the files from this repository into it. You should then follow the steps found in the "Available Scripts" section.

## Available Scripts

To install all dependencies, you should run:

### `npm install --force`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.