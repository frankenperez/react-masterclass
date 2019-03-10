# Lab 02 - React Fundamentals

- [Lab 02 - React Fundamentals](#lab-02---react-fundamentals)
  - [Creating your first React Component](#creating-your-first-react-component)
    - [Naming conventions](#naming-conventions)
    - [Create a .jsx file](#create-a-jsx-file)
    - [Import the React library](#import-the-react-library)
    - [Create a Component Class](#create-a-component-class)
    - [Adding styles to your Component](#adding-styles-to-your-component)
    - [How to export your Component](#how-to-export-your-component)
    - [How to render your Component](#how-to-render-your-component)
  - [Composing Components](#composing-components)
  - [Components and Props](#components-and-props)

## Creating your first React Component

**React Components** let you split the user interface into independent and reusable pieces, thinking about each piece in isolation.

As a general rule, keep components inside the dedicated components directory.  Create a new folder for each component and place all the component files inside.

### Naming conventions

- Extensions: Use `.jsx` extension for React components.
- Filename: Use `PascalCase` for filenames (e.g.: `ListDetail.jsx`).

### Create a .jsx file

1. Create a new `components`folder and a Header folder into this directory with a `Header.jsx` file inside:

    ```text
    app/
    └── src/
        └── components/
            └── Header/
                └── Header.jsx
    ```

> JSX is a syntax extension for JavaScript.  It was written to be used with React.  JSX is not valid JavaScript.  Before a `.jx` file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.  More info about [JXS Syntax][[jsx-syntax](https://reactjs.org/docs/introducing-jsx.html)].

### Import the React library

1. Import the React library in the `Header.jsx` file

    ```javascript
    /* Header.jsx */

    import React from 'react';
    ```

> Note: If your project is running during the next steps, sometimes you will find errors in your application or in your browser console. It's also applicable to the next Labs. **Do not worry**, they should disappear once you reach the end of each section. You can also review them to get some extra information and clues about the next steps you need to do to fix them. Consider this errors as a powerful learning source!

### Create a Component Class

To create a new Header component you can use ES6 classes and extend the `React.Component` class:

```javascript
/* Header.jsx */

import React from 'react';

class Header extends React.Component {
  // Instructions go here
}
```

1. Include a `render()` method in your instructions.  A render method is a property of each component whose value is a function thatreturns a JSX expression.

    ```javascript
    /* Header.jsx */

    class Header extends React.Component {
        render() {
            return (
            //JSX expression
            );
        }
    }
    ```

2. Inside of the render method's body, write a `return` statement that returns the title off your App and the button to Add new Ideas.

    ```jsx
    /* Header.jsx */

    class Header extends React.Component {
      render() {
          return (
          <div className="Header">
              <h1 className="Header__title">Creative Ideas</h1>
              <button>+ New Idea</button>
          </div>
          );
      }
    }
    ```

### Adding styles to your Component

1. Add a new `Header.scss` file to the component folder and import it into your jsx file:

    ```bash
    app/
    └── src/
        └── components/
            └── Header/
                ├── Header.jsx
                └── Header.scss
    ```

    ```javascript
    /* Header.jsx */

    import './Header.scss';
    ```

2. Finally add the following styles into the `.scss` file:

    ```scss
    /* Header.scss */

    // Import variables.scss file
    .Header{
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #ccc;
    }

    .Header__title{
      font-size: 1.5rem;
      text-align: left;
      margin: 0;
    }

    .Header__button{
      display: inline-block;
      position: relative;
      padding: 0 1rem;
      border: 0;
      border-radius: 3px;
      background-color: #3f83f8;
      color: #fff;
      cursor: pointer;
      font-size: 0.75rem;
      height: 2rem;
      line-height: 2rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: all, 0.4s ease-in-out;
      vertical-align: middle;

      &:hover, &:focus {
          background-color: darken(#3f83f8, 5%);
          text-decoration: none;
      }

      &:active {
          top: 1px;
      }
    }
    ```

### How to export your Component

1. Add at the end of your `Header.jsx` file:

    ```javascript
    /* Header.jsx */

    export default Header;
    ```

2. One of the drawbacks of your components directory structure is that importing components requires you to import the fully qualified path. To enable shorter import statements, add a new `index.js` file into your components directory and export the named component. This will be a common pattern in your project that you need to repeat every time you add a new component:

    ```javascript
    /* src/components/index.js */

    import Header from './Header/Header';

    export {
        Header
    };
    ```

Now, you can import your Header component in other components of your app doing this:

```javascript
import { Header } from '../../components';
```

Instead of this:

```javascript
import { Header } from '../../components/Header/Header';
```

### How to render your Component

Ensure that your `public/index.html` page contains an empty `<div id="root"></div>` tag.  This `<div>` with an unique id attribute will allow you to find it from the JavaScript code and display a React component inside of it.

Go to `src/index.js` and check that the following lines exist:

```javascript
/* src/index.js */

import ReactDOM from 'react-dom';

...

ReactDOM.render(<App />, document.getElementById('root'));
```

The `react-dom` package provides DOM-specific methods that can be used at the top level of your app.  The last line of code finds the `<div>` in your `index.html` and then displays your App React component inside of it.

> Learn more about the [ReactDom package](https://reactjs.org/docs/react-dom.html).

Finally, save all the changes and check it in your browser.  Run `npm start` if the project is not running currently.

## Composing Components

Components can refer to other components in their output.  This lets us use the same component abstraction for any level of detail.  A button, a form, a dialog, a screen: in React apps, all those are modulcommonly expressed as components.

Create an App component that renders the new Header component:

1. Delete unnecessary `App.css` file and remove the `import './App.css';` in your `App.jsx` file.

2. Remove the `logo`import and add `import { Header } from '../../components'` in `App.jsx`.

3. Remove all the contents from the render method and add your Header component inside it.

    ```javascript
    /* App.jsx */

    render() {
        return (
          <div className="App">
              <Header />
              <p className="Board">
                Board
              </p>
          </div>
        );
    }
    ```

## Components and Props

Another way that components can interact is passing information from one component to another.  This information is known as **props**.

1. In the `App.jsx` render method, add a new `title` attribute to the Header instance:

    ```javascript
    /* App.jsx */

    render() {
        return (
        <div className="App">
            <Header title="Creative Ideas"/>
            <div className="Board">
                Board
            </p>
        </div>
        );
    }
    ```

    This prop will be received by our Header component and can be accesses via `this.props.<propName>`:

2. Add your prop value in the `Header.jsx` render method:

    ```javascript
    /* Header.jsx */

    class Header extends React.Component {
      render() {
        return (
          <div className="Header">
            <h1 className="Header__title">{this.props.title}</h1>
            ...
    ```

Conceptually, components are like JavaScript functions.  They accept arbitrary inputs (_props_) and return React elements describing what should appear on the screen. At the same time, we can pass props from a component to a different component.

**Props are Read-Only**, so all React components must act like pure functions with respect to their props.

> More info about [Props](https://reactjs.org/docs/components-and-props.html)
