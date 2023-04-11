
# Weather-forecast
This is a mono repo includes couple of workspace app.  \
Code that makes sense to re-use and share across the packages should be added to apps/common.
 They can be imported as if they were installed node modules, eg: \
    `import Loading from 'common/src/components/Loading';`
   
##### Attention:   Actual app like web and mobile must not include files from each other, only from common.
 
## Project main structure
    apps/
     common: Shared code for mobile and web, for example UI component, services, and redux logic
     mobile: Mobile apps build with React-native
     web: Web app build with React


     

## Scripts

  **First of all** in the root folder , run: 
 * `yarn install` -> install all the dependencies for all workspaces

### `Debugging/Development`
Runs the app in the development mode \
In the **root** project directory, you can run:

 * `yarn dev:mobile` -> mobile local development command
 
 * `yarn dev:web` -> web local development command, Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Both mobile apps and web app have hot reload.
The page will be reloaded if you make edits.

### `Testing`
 * `yarn test:all` -> run test for all under the apps
 
 if you want to run test in one workspace, for example mobile workspace \
 
   * `yarn worksapce mobile test` -> run test only for mobile workspace  
   
   or
   
   * `cd apps/mobile` -> go to the mobile workspace dir
   * `yarn test` -> run test


## Learn More

 * [yarn workspaces](https://yarnpkg.com/features/workspaces) -> Creating monorepo
 * [expo](https://docs.expo.dev/) -> For Mobile apps development
 * [webpack](https://webpack.js.org/concepts/) -> Bundler for web,
 * [react-native-web](https://necolas.github.io/react-native-web/) -> React Native Components and APIs on the Web

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
