# Lab 01 - Starting a New React Project

- [Lab 01 - Starting a New React Project](#lab-01---starting-a-new-react-project)
  - [Creating a new React App](#creating-a-new-react-app)
    - [Available Scripts](#available-scripts)
      - [`npm start`](#npm-start)
      - [`npm test`](#npm-test)
      - [`npm run build`](#npm-run-build)
      - [`npm run eject`](#npm-run-eject)
  - [Project Structure](#project-structure)
  - [Adding a CSS Preprocessor](#adding-a-css-preprocessor)
  - [Displaying ESLint Output in the Editor](#displaying-eslint-output-in-the-editor)

## Creating a new React App

It is possible to manually create a React project, but Facebook has created a node module **create-react-app** to generate a boilerplate version of a React application.

> **You’ll need to have Node >= 8.10.0 on your local development machine** (but it’s not required on the server). You can use [nvm] (macOS/Linux) or [nvm-windows] to easily switch Node versions between different projects.

[nvm]: https://github.com/creationix/nvm#installation
[nvm-windows]: https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows

To create a new app, choose a new empty directory for your project, open it in your terminal and run:

```shell
npx create-react-app my-app
```

> _[npx] comes with npm 5.2+ and higher, see [instructions for older npm versions][npm-older]_.

[npx]: https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
[npm-older]: https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f

Create React App 2.0 was released last year, including new features and performance improvements: Babel 7, webpack 4, and Jest 23. [Lear more](https://reactjs.org/blog/2018/10/01/create-react-app-v2.html) about what is included in this major update.

> Check the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

### Available Scripts

Once done, inside the newly created project `cd \name-of-app`, you can run some built-in commands.

#### `npm start`

To **run the application** in development mode, execute `npm start`. In your browser, open <http://localhost:3000> to view your running react application.

The page will automatically reload if you make changes in the code. Also, you will see the build errors and lint warnings in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `npm run build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

## Project Structure

When it comes to structuring a React app, the ideal folder organization is the one that allows you to move around your code with the least amount of effort. The folder structure should encourage
scalability, but also reusability and be simple enough for new team members to quickly get onboard.

After creation, your project should look like this:

```text
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

We are going to create new directories and move some files, to get the following folder structure:

```text
my-app/
├── README.md
├── node_modules/
├── package.json
├── .gitignore
└── public/
    ├── index.html
    └──favicon.ico
    └── manifest.json
└── src/
    └── assets/
        └── images/
            └── logo.svg
        └── styles/
            └── index.css
    └── modules/
        └── App/
            ├── App.css
            ├── App.js
            └── App.test.js
    └── services/
        └── serviceWorker.js
    └── index.js
```

Don't forget to update the path for the imported files in `App.js` and `index.js` considering the new folder structure:

```javascript
/* index.js */
...
import './assets/styles/index.css';
import App from './modules/App/App';
import * as serviceWorker from './services/serviceWorker';
```

```javascript
/* App.js */
...
import logo from '../../assets/images/logo.svg';
```

Run `npm start`and check that everything works.

## Adding a CSS Preprocessor

We will integrate a CSS preprocessor. _In this lab, we will be using **Sass**, but you can also use Less, or another alternative_.

Install node-sass into your project directory:

```sh
npm install node-sass --save
```

Now you can rename your `App.css` file to `App.scss` and update `App.js` to import `App.scss`.

```javascript
/* App.js */
...
import './App.scss';
```

Repeat the same steps and reame your `assets/styles/index.css` file to `assets/styles/index.scss` and update `index.js` to import `index.scss`.

```javascript
/* index.js */
...
import './assets/styles/index.scss';
```

This file and any other file will be automatically compiled if imported with the extension .scss or .sass.

Run `npm start` and check that application is rendering properly.

Now, you can do some changes into the `App.scss` file and check the changes in the browser.

Also, you can share variables between Sass files using Sass imports.

```scss
@import 'styles/_colors.scss'; // assuming a styles directory under src/
@import '~nprogress/nprogress'; // importing a css file from the nprogress node module
```

> Note: node-sass also supports the SASS_PATH variable. To use imports relative to a path you specify, and from node_modules without adding the ~ prefix, you can add a .env file at the project root with the variable SASS_PATH=node_modules:src. To specify more directories you can add them to SASS_PATH separated by a : like path1:path2:path3

## Displaying ESLint Output in the Editor

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint whereby you should see the linter output right in your terminal as well as the browser console.

However, if you prefer the lint results to appear right in your editor, there are some extra steps you can follow:

1. You would need to install an ESLint plugin for your editor first.

    [Download][eslint-download] the ESLint plugin for Visual Studio     Code.

2. Then, add a file called `.eslintrc` to the project root:

    ```javascript
    {
      "extends": "react-app"
    }
    ```

Now your editor should report the linting warnings. To verify that it's working, go to the `App.js` file and create an ESLint error into line 8 by adding: `<div></div>`. A red underline will appear and a new error message is displayed on mouse over: _Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag_.

> This feature is available with `react-scripts@0.2.0` and higher. It only works with npm 3 or higher.  More information about the [ESLint package in Create React App][eslint-package].
> Learn more about [ESLint](eslint-start).

[< Prev](../lab-00) | [Next >](../lab-02)

[eslint-download]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[eslint-start]: https://eslint.org/docs/user-guide/getting-started
[eslint-package]: https://github.com/facebook/create-react-app/blob/26f701fd60cece427d0e6c5a0ae98a5c79993640/packages/eslint-config-react-app/README.md
