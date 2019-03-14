# Lab 00 - What is React. Key Features

- [Lab 00 - What is React. Key Features](#lab-00---what-is-react-key-features)
  - [What is React](#what-is-react)
  - [React. A JavaScript library for building user interfaces](#react-a-javascript-library-for-building-user-interfaces)
    - [Main Characteristics of React](#main-characteristics-of-react)

## What is React

**React** is a modern open-source web development toolkit built by Facebook. Is a declarative, efficient, and flexible **JavaScript library**, one of the most popular in the market, for building interactive and dynamic user interfaces and specifically for developing single page applications.

React lets you compose complex User Interfaces from small and isolated parts called **components** which merged together to complete a view. Dividing web applications up into components is a central idea to creating applications with React. Instead of a gigantic monolith of a web page, you will generally consider the individual pieces that make up an application and divide it up into smaller pieces that are much easier to develop, debug, and to generally think about.

## React. A JavaScript library for building user interfaces

![React logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png)

> React = Components + Virtual Dom + JSX + Props & State.

**React** is a modern open-source web development toolkit built by Facebook.
React is a declarative, efficient, and flexible JavaScript library for
building user interfaces. It lets you compose complex UIs from small
and isolated pieces of code called *components*.

Dividing web applications up into **components** is a central idea to
creating applications with React. Instead of a gigantic monolith of
a web page, you will generally consider the individual pieces that
make up an application and divide it up into smaller pieces that
are much easier to develop, debug, and to generally think about.

### Main Characteristics of React

![React operations](https://www.ibm.com/developerworks/library/wa-react-intro/figure1.png)[Image source](https://www.ibm.com/developerworks/library/wa-react-intro/index.html)

- **Component-based Architecture**
  Applications are built using nested, reusable **components**. Components encapsulate a behavior, a view and a state.

- **Declarative Vs Imperative programming**
  Components react to a change in the application state. Their behavior is defined and a reaction is triggered when one of their properties changes.

- **High Performance, thanks to Virtual DOM**
  When processing changes, React compares the **Virtual DOM** with the DOM to sync and reconcile changes. As a result, the DOM is efficiently and partially updated.

- **JSX**
  React extends the syntax of JavaScript to produce “elements”. **JSX expressions** are similar to HTML, but in reality they become JS functions that evaluate to objects.  The resulting elements are stored in memory and not in the DOM.

- **One-way Data Flow**
  Nested components get a snapshot of their state by their parent component, use it according to their defined behavior, and when a state change occurs it's propagated upwards using callbacks. State is propagated downwards in the component hierarchy while changes are propagates upwards.

- **Component Life-cycle**
  React defines the life cycle of components and provide a default implementation; these methods are executed at particular moments  of the life cycle, and they can be overridden to run custom code.

[Next >](../lab-01-start-react-project)
