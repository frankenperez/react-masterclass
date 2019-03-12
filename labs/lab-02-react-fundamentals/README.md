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
  - [State Management and Event Handling in Components](#state-management-and-event-handling-in-components)
    - [Events](#events)
  - [Stateless Components _versus_ Pure Components](#stateless-components-versus-pure-components)
  - [Adding Default Props](#adding-default-props)

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

    .Header{
      position: fixed;
      top: 0;
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 1rem;
      background-color: #eee;
    }

    .Header__title{
      margin: 0;
      font-size: 1.5rem;
      text-align: center;
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

## State Management and Event Handling in Components

React components will often need dynamic information (_information that can change_) in order to render themselves.  Unlike props, a component's **_state_** is not passed in from the outside and each component decides its own state.

To make a component have state, give it an initial state property.

1. Create a new Board component and declare a new State inside of a `constructor(props)` method:

    ```javascript
    /* Board.jsx */

    import React from 'react';

    class Board extends React.Component {
      constructor(props){
        super(props);
        this.state = {
            darkMode: false
        };
      }
    }

    export default Board;
    ```

A component can read its own state `this.state.<stateName>` and also it can change its value by calling the function `this.setState()`. This function takes an object and merges it with the component's current state.

### Events

The most common way to change a current state is to call a custom function when a **event** is triggered, for example by clicking on a button.

Handling events with React elements is very similar to handling events on DOM elements, with two syntactic differences:

- React events are named using `camelCase`, rather than lowercase. E.g.: `onClick` instead `onclick`.
- With JSX you pass a function as the event handler, rather than a string.

1. Add a render method and an event handler when the user clicks on the button (`onClick`):

    ```javascript
    /* Board.jsx */

    class Board extends React.Component {

      ...

      render() {
        return (
          <div className="Board">
            <button className="Board__switcher" onClick={this.switchMode}>
              Switch Mode
            </button>
          </div>
        );
      }
    }

    ```

2. Add a custom method that changes the `mode` state of Board component:

    ```javascript
    /* Board.jsx */

    class Board extends React.Component {

      ...

      switchMode() {
          this.setState({ darkMode: !this.state.darkMode });
      }
    ```

3. Bind `this` in the component constructor:

    ```javascript
    /* Board.jsx */

    constructor(props){
        ...
        this.switchMode = this.switchMode.bind(this);
    }
    ```

    > In JavaScript, class methods are not bound by default. If you forget to bind `this.toggleMenu` and pass it to `onClick`, this will be `undefined` when the function is actually called.  If calling `bind` annoys you, there are two ways you can get around this: using the experimental public class fields syntax or using an arrow function in the callback.

4. Add some styles to a new `Board.scss` file and import into `Board.jsx`:

    ```scss
    /* Board.scss */

    /*** Colors ***/
    $light: #ddd;
    $dark: #333;

    .Board{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      transition: color, background-color 0.4s ease-in-out;
    }

    .Board__switcher{
      display: block;
      position: relative;
      padding: 0 1rem;
      margin-bottom: 1rem;
      border: 0;
      border-radius: 2px;
      cursor: pointer;
      font-size: 0.75rem;
      height: 2rem;
      line-height: 2rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: color, background-color 0.4s ease-in-out;

      &:hover,
      &:focus,
      &:active{
        outline: 0;
      }
    }

    .Board--light{
      background-color: $light;
      color: $dark;

      .Board__switcher{
        background: $dark;
        color: $light;
      }
    }

    .Board--dark{
      background-color: $dark;
      color: $light;

      .Board__switcher{
        background: $light;
        color: $dark;
      }
    }

    ```

    ```javascript
    /* Board.jsx */

    import './Board.scss';
    ```

5. Add your component to the `index.js` file in the `components` directory and include it into the App module:

    ```javascript
    /* index.js */

    import Header from './Header/Header';
    import Board from './Board/Board';

    export {
      Header,
      Board
    };
    ```

    ```javascript
    /* App.js */

    import React, { Component } from 'react';
    import { Header, Board } from '../../components';

    class App extends Component {
      render() {
        return (
          <div className="App">
            <Header title="Creative Ideas" />
            <Board />
          </div>
        );
      }
    }

    export default App;
    ```

6. Add a condition that checks `darkMode` state to render or not a className:

    ```javascript
    /* Menu.jsx */

    render() {
      ...
      <div className={`Board Board--${this.state.darkMode ? 'dark' : 'light'}`}>
      ...
    ```

    Test to change the initial state `darkMode` to `true` and the board will render in dark mode by default. Change again the value to `false`.

    > Learn more about [Conditional Rendering in React](https://reactjs.org/docs/conditional-rendering.html).

7. Finally, your `Board.jsx` component should look like this:

    ```javascript
    /* Board.jsx */

    import React from 'react';
    import './Board.scss';

    class Board extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
          darkMode: false
        };
        this.switchMode = this.switchMode.bind(this);
      }

      switchMode() {
        this.setState({ darkMode: !this.state.darkMode });
      }

      render() {
        return (
          <div className={`Board Board--${this.state.darkMode ? 'dark' : 'light'}`}>
            <button className="Board__switcher" onClick={this.switchMode}>
              Switch Mode
            </button>
          </div>
        );
      }
    }

    export default Board;
    ```

## Stateless Components _versus_ Pure Components

A **Stateless Component** is declared as a function that has no state and returns the same markup given the same props:

```javascript
HelloWorld = () => {
  return <h1>HelloWorld</h1>;
}
```

A **Pure Component** is one of the most significant ways to optimize React applications. The usage of Pure Component gives a considerable increase in performance because it reduces the number of render operations in the application:

```javascript
class HelloWorld extends React.PureComponent {
  render() {
    return <h1>HelloWorld</h1>
  }
}
```

1. Create a new Footer component as a Pure Component:

    ```javascript
    /* Footer.jsx */

    import React from 'react';
    import './Footer.scss';

    class Footer extends React.PureComponent {
        render() {
            return (
            <div className="Footer">
                <p className="Footer__info">
                    'My React App'
                </p>
            </div>
            );
        }
    }

    export default Footer;
    ```

2. Add some styles to your footer component into a `Footer.scss` file

    ```scss
    /* Footer.scss */

    .Footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: 0.5rem;
      background-color: #eee;
      font-size: 0.75rem;
      text-align: center;
    }
    ```

3. Add your new component to the `index.js` in the `components`directory and include it into the App module:

    ```javascript
    /* index.js */

    import Board from './Board/Board';
    import Footer from './Footer/Footer';
    import Header from './Header/Header';

    export {
      Board,
      Footer,
      Header
    };
    ```

    ```javascript
    /* App.js */

    import React, { Component } from 'react';
    import { Board, Footer, Header } from '../../components';

    class App extends Component {
      render() {
        return (
          <div className="App">
            <Header title="Creative Ideas" />
            <Board />
            <Footer />
          </div>
        );
      }
    }

    export default App;
    ```

## Adding Default Props

You can define some default values for your component props and ensure that these props will have a value if they were not provided by the parent component.

To assign a value to a specific prop, use the special `defaultProps` property.

Suppose that you want to define your `Footer__info` text as a prop `footerInfo` that could change.

```javascript
/* Footer.jsx */
render() {
    return (
    <div className="Footer">
        <p className="Footer__info">
            {this.props.footerInfo}
        </p>
    </div>
    );
}
```

In `App.jsx` we are not passing currently a prop to our Footer component:

```javascript
/* App.jsx */

render() {
    return(
        ...
        <Footer />
        ...
    )
}
```

To avoid an error in your application, you can define a default value to this prop.

1. Add a default prop to your Footer component. _To improve the readability, you can define a `defaultProps` constant at the beginning of your file and assign its values before your component export_:

    ```javascript
    /* Footer.jsx */

    import React from 'react';
    import './Footer.scss';

    const defaultProps = {
        footerInfo: 'My React App'
    };

    class Footer extends React.PureComponent {
        render() {
            return (
            <div className="Footer">
                <p className="Footer__info">
                    {this.props.footerInfo}
                </p>
            </div>
            );
        }
    }

    Footer.defaultProps = defaultProps;
    export default Footer;
    ```

2. Run you application and check that it's working as expected.

> Learn more about [Default Prop Values](https://reactjs.org/docs/typechecking-with-proptypes.html#default-prop-values)

[< Prev](../lab-01-start-react-project) | [Next >](../lab-03)
