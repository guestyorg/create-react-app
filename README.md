## Deprecated

The project is deprecated.
Jarvis now uses Create React app's [Custom Templates](https://create-react-app.dev/docs/custom-templates/).

### Migration 

In order to migrate to a newer `react-scripts` version:
* `yarn remove @guestyci/guesty-react-scripts`
* `yarn add react-scripts babel-plugin-transform-react-qa-classes`
* `yarn add eslint-config-airbnb eslint-config-prettier react-app-rewired customize-cra --dev`
* echo "const { override, addBabelPlugin } = require('customize-cra');
module.exports = override(
  addBabelPlugin('babel-plugin-transform-react-qa-classes')
);
" > `config-overrides.js`
* `cat <<< $(jq '.scripts += {start:"ESLINT_NO_DEV_ERRORS=true react-app-rewired start"}' package.json) > package.json`
* Upgrade `Circle CI` node docker image to 12 (`.circleci/config.yml`)

If you encounter any issue with the migration, please `#contact-platform-fe`

#### Breaking changes: 

`CLUSTER` and `GUESTY_ENV` are no longer passed to the build.

# Guesty's Create React App

Guesty's fork configurations for Create-react-app

For general knowledge please refer to - [User Guide](https://create-react-app.dev/docs/getting-started)   
On how to develop apps bootstrapped with Create React App.

## Quick Overview

There are multiple versions of the apps. Please take care of what and where you change

### CLI
This is the most common usage of our tool provided to compliment our [jarvis](https://github.com/guestyorg/jarvis) cli tool

branch name: `feature/cli`

To publish - run:
```javascript
yarn publish --tag cli
``` 

### None cli generated apps

For all the older apps which were not generated via the cli.  
branch name: 'master'

To publish - run:
```javascript
yarn publish
``` 


## How to Deploy

CRA apps are complex, the deployable section is the `react-scripts` and ONLY the `react-scripts` folder.  

To deploy:
 1. clone the repo
 2. make your changes (to react-scripts)
 3. from react-scripts folder run :
 ```javascript
 yarn publish --tag cli
 ``` 

## How to update:

Periodically we might want to update our CRA fork and align it with the original (upstream) master.  

Before you do that, Be **EXTREMELY** careful, we have made changes to CRA, make sure they are not overridden.

to update:
with some sort of merge tool, compare upstream/master with our feature/cli.

Run the app locally and test it

only then push and deploy.  
