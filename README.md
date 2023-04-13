
# Weather-forecast
This is a mono repo includes couple of workspace app made by using **yarn workspaces**.  \
Code which makes sense to be reused and shared across the apps should be added to **apps/common**. 
They can be imported, fox example:
```
 import Loading from 'common/src/components/Loading';
```
   
   
**Attention:** Actual app like web and mobile must **NOT** include files from each other, only from common
 
## Architecture
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
### Higher-Order Components in common

* **StyleText:** simple HOC to wrap the Text component where we can define customized font size,
  weight, family and color, more props can be extended.
  
* **GenericError:** simple HOC to show error message, has default error message, 
 but can be a customized message/component
 
* **Loading**: simple component to show loading message, default message is "Loading", 
 can define customized message, possible to be extended as a HOC as well

### Higher-Order Components in mobile

* **PageWithBackGroundImage:** simple HOC to with a background image, 
  it has a default value, but can set to any as you want 
  
### Mixins for flexBox and breakpoint in web

* **flexBox** mixin: \
    Flexbox makes responsive development easier, 
    but it would be annoying to repeat same style for different elements.
    Therefore a flexBox mixin was created,it can be used like this in a scss class :  
    ```
    .example {
       @include flexBox($alignItems: $center, $justifyContent: $center);
    } 

    ```
    `$alignItems` and `$justifyContent` are params for mixin function `flexBox`, 
    there are more supported params, you can check in `stylesMixin.scss` file. \
    `$center` is a constant value defined in `stylesMixin.scss` file.

* **breakpoint** mixin: \
    you can use like this: 
    ```
    .example {
        @include breakpoint(980) {
        // override some style
        }
    }
    ```
    
### Git hooks

Made by [husky](https://typicode.github.io/husky/#/) 
* `pre-push`: 
    * `yarn lint:all`
    * `yarn test:all`

## Main frameworks and libraries being used

* [react](https://react.dev) 
* [react-native](https://reactnative.dev)
* [expo](https://expo.dev): Quick start for react-native apps
* [react-native-web](https://necolas.github.io/react-native-web/): React Native Components and APIs on the Web
* [redux](https://redux.js.org/): State management
* [nvm](https://github.com/nvm-sh/nvm): Node version manager
* [axios](https://axios-http.com/): Make api call
* [redux-saga](https://redux-saga.js.org/): Redux side effect management
* [husky](https://typicode.github.io/husky/#/): Modern native Git hooks made easy
* [yarn workspaces](https://yarnpkg.com/features/workspaces):Creating monorepo
* [sass/scss](https://sass-lang.com/documentation/syntax): Styling for web
* [OpenWeatherMap API](https://openweathermap.org/current): Where is the weather data from 
* Routing: 
   * react-native: [react-navigation]()
   * web: [react-router](https://reactrouter.com/en/main) + [connected-react-router](https://github.com/supasate/connected-react-router#readme) 
* Linting: 
   * typescript: [eslint](https://eslint.org/) + [typescript-eslint](https://typescript-eslint.io/), 
   * scss/css: [stylelint](https://stylelint.io/)

* Unit/Integration test: 
   * [jest](https://jestjs.io/)
   * [redux-saga-test-plan](https://redux-saga-test-plan.jeremyfairbank.com/): Library for saga test
   * [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/): Library for react component test
   * [react-native-testing-library](https://callstack.github.io/react-native-testing-library/): Library for reactive native component test

* Bundling: 
   * [Webpack](https://webpack.js.org/): Static module bundler for web
   * Mobile apps use the expo integrated Metro
    
* Location api: 
   * react-native: [expo-location](https://docs.expo.dev/versions/latest/sdk/location/) being used.
   * web: [navigator.geolocation](https://developer.mozilla.org/en-US/docs/web/api/navigator/geolocation) being used

## Development & Debugging

### Setup

* If you don't have environment setup for react-native, 
you have to [check this document](https://reactnative.dev/docs/environment-setup?guide=native).
However, suggest you to install [expo-go](https://expo.dev/expo-go), which makes debugging much easier

* Make sure you have node version being used correctly(specified in `.nvmrc`),
you can install manually or by command `nvm install`(If you don't have nvm, suggest to install [nvm](https://github.com/nvm-sh/nvm))

* `yarn install` -> install the dependencies for all workspace

### Scripts
In the **root** project directory, you can run:

* `yarn dev:mobile` -> Use expo go to scan the QR code, you will the app
* `yarn dev:web` -> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
If you want to run CI in a specific workspace, for example mobile workspace \
you can do:
 
* `yarn workspace mobile dev` -> Use expo go to scan the QR code, you will see the app 

or 
* `cd apps/mobile` -> Go to the mobile workspace
* `yarn dev` -> Use expo go to scan the QR code, you will see the app
 
**Both mobile apps and web app have hot reload.
The page will be reloaded if you make edits**.

## Testing

* `yarn test:all` -> Run test for all under the apps
* `yarn test:mobile` -> Run test for mobile and common
* `yarn test:web` -> Run test for web and common
 
If you want to run test in a specific workspace, for example mobile workspace 
 
* `yarn worksapce mobile test` -> Run test only for mobile workspace   
or   
* `cd apps/mobile` -> Go to the mobile workspace 
* `yarn test` -> Run test

## Linting

* `yarn lint:all` -> run eslint --fix and stylelint --fix for all  under the apps, it will auto fix some errors
* `yarn lint:mobile` -> run eslint --fix and stylelint --fix for mobile and common
* `yarn lint:web` -> run eslint --fix and stylelint --fix for web and common

If you want to run linting in a specific workspace, for example mobile workspace 
 
* `yarn worksapce mobile lint` -> Run test only for mobile workspace   
or
* `cd apps/mobile` -> Go to the mobile workspace workspace
* `yarn lint` -> Run test
   
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
* For web release teamcity or jenkins could be a proper solution.
* For mobile apps can check [expo deploy document](https://docs.expo.dev/deploy/build-project/) 

## Learn More
* How to create react-native app: [https://reactnative.dev/docs/environment-setup](https://reactnative.dev/docs/environment-setup)
* How to create react app: [https://facebook.github.io/create-react-app/docs/getting-started](https://facebook.github.io/create-react-app/docs/getting-started)
