## This is a mono repo includes couple of workspace app.

### Basic knowledge needs to know 
    
 * [yarn workspaces](https://yarnpkg.com/features/workspaces) -> creating monorepo
 * [expo](https://docs.expo.dev/) -> mobile apps development
 * [webpack](https://webpack.js.org/concepts/) -> bundler for web
 
## Infrastructure
    common: shared code for mobile and web, for example UI component, services, and redux logic
    mobile: Mobile apps build with React-native
    web: Web app build with React

## Scripts

### `debugging/development`
Runs the app in the development mode \
In the root project directory, you can run:

 * `yarn dev:mobile` -> mobile local development command
 
 * `yarn dev:web` -> web local development command, Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


Both mobile apps and web app have hot reload.
The page will be reloaded if you make edits.


### `test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
