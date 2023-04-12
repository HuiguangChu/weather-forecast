
# Weather-forecast
This is a mono repo includes couple of workspace app by using **yarn workspaces**.  \
Code which makes sense to be reused and shared across the apps should be added to **apps/common**. \
They can be imported as if they were installed node modules, for example:
    
    import Loading from 'common/src/components/Loading';
   
**Attention:** Actual app like web and mobile must **NOT** include files from each other, only from common
 
## Project main structure
```
   apps/
     common-> Shared code for mobile and web, for example UI component, services, and redux logic 
     mobile-> Mobile apps build with React-native
     web-> Web app build with React
   .eslintrc-> Eslint config file
   .nvmrc-> Node version defination
   .jest.config.js->Jest test config
   .stylelint.config.js-> Stylelint configuration
   .tsconfig-> Typescript compile options config
   .tesoconfig.test.json -> Configuration for jest test with typescript
   .husky -> Git hooks
```
**Key customized components in common:** 

 **StyleText:** simple HOC to wrap the Text component where we can define customized font size,
  weight, family and color, more props can be extended.
 
 **PageWithBackGroundImage:** simple HOC to with a background image, 
  it has a default ones, but can set anyone as you want 
 
 **GenericError:** simple HOC to show error message, has default error message, 
 but can be a customized message/component
 
 **Loading**: simple component to show loading message, default message is "Loading", 
 can define customized message, possible to extend it as a HOC as well

## Development
Main Frameworks/libraries used: 

* [React](https://react.dev) 
* [React-native](https://reactnative.dev)
* [Expo](https://expo.dev): Quick start for react-native apps.'
* [react-native-web](https://necolas.github.io/react-native-web/): React Native Components and APIs on the Web
* [redux](https://redux.js.org/): State management
* [nvm](https://github.com/nvm-sh/nvm): Node version manager
* [axios](https://axios-http.com/): Make api call
* [redux-saga](https://redux-saga.js.org/): Redux side effect management:
* [husky](https://typicode.github.io/husky/#/): modern native Git hooks made easy
* [yarn workspaces](https://yarnpkg.com/features/workspaces) -> Creating monorepo

* Routing: 
    * Native app: [react-navigation]()
    * Web: [react-router](https://reactrouter.com/en/main) + [connected-react-router](https://github.com/supasate/connected-react-router#readme) 
* Linting: 
    * typescript: [eslint](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/), 
    * scss/css: [stylelint](https://stylelint.io/)

* Unit/Integration test: 
   * [jest](https://jestjs.io/)
   * [redux-saga-test-plan](https://redux-saga-test-plan.jeremyfairbank.com/): lib for saga test:
   * [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/): lib for react component test: 
   * [react-native-testing-library](https://callstack.github.io/react-native-testing-library/): lib for reactive native component test

* Bundling: 
   * [Webpack](https://webpack.js.org/): static module bundler for web
   * Mobile apps use the expo integrated Metro
    
* Location api: 
  * react native: [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) being used.
  * web: [navigator.geolocation](https://developer.mozilla.org/en-US/docs/web/api/navigator/geolocation) being used

## Debugging

**First of all** If you don't have environment setup for react-native, 
you have to [check this document](https://reactnative.dev/docs/environment-setup?guide=native) 
or suggest you to install [expo-go](https://expo.dev/expo-go), which make debugging much easier

Then make sure you have node version being used correctly(specified in *.nvmrc*),
ou can do manually or by run `nvm install`(If you don't have nvm, suggest to install [nvm](https://github.com/nvm-sh/nvm))

* `yarn install` -> install the dependencies for all workspace
 
In the **root** project directory, you can run:
 * `yarn dev:mobile` -> Use expo go to scan the QR code, you will the app
 
 * `yarn dev:web` -> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
If you want to run CI in a specific workspace, for example mobile workspace \
 you can do:
 * `yarn workspace mobile dev` -> use expo go to scan the QR code, you will the app
 
 or 
    * `cd apps/mobile` -> go to the mobile workspace
    * `yarn dev` -> use expo go to scan the QR code, you will the app
 
**Both mobile apps and web app have hot reload.
The page will be reloaded if you make edits**.

## Testing
 * `yarn test:all` -> run test for all under the apps
 * `yarn test:mobile` -> run test for mobile and common
 * `yarn test:web` -> run test for web and common
 
 if you want to run test in a specific workspace, for example mobile workspace 
 
   * `yarn worksapce mobile test` -> run test only for mobile workspace  
   
   or
   
   * `cd apps/mobile` -> go to the mobile workspace dir
   * `yarn test` -> run test

## Linting
 * `yarn lint:all` -> run eslint --fix and stylelint --fix for all  under the apps, it will auto fix some errors
 * `yarn lint:mobile` -> run eslint --fix and stylelint --fix for mobile and common
 * `yarn lint:web` -> run eslint --fix and stylelint --fix for web and common

 if you want to run linting in a specific workspace, for example mobile workspace 
 
   * `yarn worksapce mobile lint` -> run test only for mobile workspace  
   
   or
   
   * `cd apps/mobile` -> go to the mobile workspace dir
   * `yarn lint` -> run test
   
## What could be improved?

* Make better UI. For example: font family, size, theme, and so on.

* An search input should be added, allow user to search a specific place,
should support ambiguous text.

* Make an API gateway to optimize the FE api calls. OpenWeatherMap only supports the one call for one city, 
given that we have 10 cities or more, could cause performance issue

* Write more tests, currently just demonstrated some for services, saga, reducer. 
But we need to write more tests on component level as well.

* Caption/Localization: [react-i18next](https://react.i18next.com/) can be one of th option

* Error tracking/analyzing.

* Take care more about accessibility and usability. 
  * Check accessibility locally and online(https://www.accessibilitychecker.org/) and improve
  * Show user's recently visited locations
  * Could have voice reading
  * Theme change depends on the environment(night/daytime)
  * ...
     
* Implement **settings**:  
    * An option to turn off/on the location service
    * Option for receive warning notification depends on the weather status
    * Units:
      * temperature unit
      * wind unit
      * visibility unit
    * Language change
    * Font size/color change
    * App theme change
    * Accurate of location(Distance)

**Above settings should be stored from device storage / local storage**

## For production environment  
1. For web release teamcity or jenkins could be a proper solution.
2. For mobile apps can check [expo deploy document](https://docs.expo.dev/deploy/build-project/) 

## Learn More
* How to create react-native app: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
* How to create react app: [https://facebook.github.io/create-react-app/docs/getting-started](https://facebook.github.io/create-react-app/docs/getting-started).

