This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Release Notes
### Release 1.1.0
- 6 fully customizable stories with audio and background images
- Pause and PLay functionality for story audio
- Increased image sizes and for both story and word images
### Release 1.0.0 for Expo Presentation Features
- 3 fully customizable stories with audio and background images
- Words with image and audio for 20+ types of sight words
   - Includes customizable friend characters
- Quizzes to learn sight words
- Automatic story audio and text progression
- All story text and word text is read aloud to the user
- User progress is locally stored for any given browser session
- Word category for customizable animals with three parts- head, middle, and tail

### Missing Features
- Word-by-word highlighting of text matched with story audio
- Some words are missing audio, client needs to add create and add missing audio
files

## Install Guide
### Prerequisites
- An Internet browser and Internet connection to access:
  - Node.js website for the installation of Node
  - The repo for our application source code
- Must have Node.js installed on the device on which you wish to build the application
  - https://nodejs.org/en/
  - Verify installation of a node by running `node -v` in the command line
- No steps necessary for installation of actual application

### Dependent Libraries
- Third-party dependencies are handled in step (2b) of Build Instructions

### Download, Build and Run Instructions
1. Clone or download the source code from our Github repository:
    1. https://github.com/JWhite30515/jdbrainyweb
    1. To clone, run `git clone https://github.com/JWhite30515/jdbrainyweb.git` in the directory where you want the source code to be stored
    1. To download:
        1. Click on the green “Clone or download” on our Github repository page
        1. Click on “Download ZIP” to download a zip file of our source code
1. Navigate into the directory where you cloned/downloaded the source code
    1. E.g. `cd ~/Desktop/jdbrainyweb`
    1. Run `npm i` from that directory to install `node_modules`, an automatically
generated folder of the third-party dependencies our app uses
1. Run `npm run start` to compile and run the application
1. If the application compiles successfully, you can see it running on `localhost:3000` in the
browser of your choice

### Troubleshooting
- If unable to run `npm` commands, verify node is installed by running `node -v` on the
command line

## Available Scripts

### IMPORTANT
- make sure you have node installed
- run `npm i` to install node_modules
- when commiting, make sure your global gitignore excludes the 
  - node_modules/
  - .DS_Store
- reference https://jayeshkawli.ghost.io/using-global-gitignore-on-mac/ if you need help
 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
