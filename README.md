# React-Redux Boilerplate

A well constructed boilerplate for React-Redux applications.

* Clone the repo
* Run `npm install`
* Execute `npm start` or `npm run app`
* Application will be hosted on `http://localhost:3000/'

# Platforms

These are the technologies used:
* React - Developing UI
* Redux - Store management
* SASS - styling
* Node, Express - Server

# Directory Structure to be followed in frontEnd

`
app/
  modules/
    core/
      components/         - Root parent components, mostly main.js
      lib/                - place third party or own lib/utilities/helpers js files
    common/
      components/         - reusable dumb components
      styles.scss         - styles for all components in this module
    <module-1> eg. home
      components/
      containers/
      styles.scss
    <module-2>/
  styles/
    _mixins.scss          - scss mixins
    _type.scss            - define typeface for application here
    _colors.scss          - define color pallete used across app
    _variables.scss       - define scss variables
    _helpers.scss         - placeholders, etc.,
    main.scss             - main scss file which would be imported in root component of file
  app.js                  - entry point file for frontEnd\
  index.html
  reducers.js
  routes.js
  selectors.js            - optional. Only if you decide to use <b>reselect</b> module
  store.js
public/                   - to store any assets such as icons, imgs, fonts etc.,
internals/                - define configuration of webpack and others
server/                   - server modules
`

# NOTE
*	Support hot reloading for React as well as Scss. For complete hot reload support for React              components, you may have to define components by React.Component class, because hot reload supports only for those. Components created in Stateless function style is not currently supported

# No testing framework is added as of now, free feel to add a good one!
