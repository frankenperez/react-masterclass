# Lab 03 - React Fundamentals

- [Lab 03 - React Fundamentals](#lab-03---react-fundamentals)
  - [Getting a full fake REST API with json-server](#getting-a-full-fake-rest-api-with-json-server)
    - [Install JSON Server](#install-json-server)
    - [Adding mocked data to your project](#adding-mocked-data-to-your-project)
    - [Starting JSON Server](#starting-json-server)
  - [Fetching Data: Part 1](#fetching-data-part-1)
  - [React Lifecycle Methods](#react-lifecycle-methods)
    - [Commonly Used Lifecycle Methods](#commonly-used-lifecycle-methods)
    - [Rarely Used Lifecycle Methods (_React 16.3+_)](#rarely-used-lifecycle-methods-react-163)
    - [Legacy Lifecycle Methods](#legacy-lifecycle-methods)
  - [Fetching Data: Part 2](#fetching-data-part-2)

## Getting a full fake REST API with json-server

JSON Server is a Node Module that you can use to create a demo REST Json web service in less than a minute.  All you need is a JSON file for sample data.

[View JSON server repository](https://github.com/typicode/json-server)

### Install JSON Server

```sh
npm install -g json-server
```

### Adding mocked data to your project

Copy and paste the following data into a new `mockdata.json` file in `services` directory:

```json
{
  "ideas": [
    {
      "id": "1",
      "title": "Idea 1",
      "detail": "Details for idea 1",
    }, {
      "id": "2",
      "title": "Idea 2",
      "detail": "Details for idea 2",
    }, {
      "id": "3",
      "title": "Idea 3",
      "detail": "Details for idea 3",
    }
  ]
}
```

### Starting JSON Server

To be abble to run two scripts at the same time we can use the `concurrently` library. To install it, run the following command:

```sh
npm install -g concurrently
```

Create a `server` script to configure your json-server and add it to the `start` script to run concurrently. Update your `package.json` replacing the following lines:

```json
"scripts": {
  "server": "json-server --watch src/services/mockdata.json --port 3001",
  "start": "concurrently --kill-others \"npm run server\" \"react-scripts start\"",
  ...
},
```

Run `npm start` and go to <http://localhost:3001/ideas> to inspect the returned data from the `/ideas` endpoint.

## Fetching Data: Part 1

React doesn't prescribe a specific approach to data fetching, but people commonly use either the `fetch()` API provided by the browser or a library like axios.  (_In the current lab we are going to use the `fetch()` API and we can implement the axios library in a next optional lab_).

To initiate a component with remote data, React components have many useful lifecycle hooks.

It's time for a break. Let's know all these methods first.

## React Lifecycle Methods

On the component class we can declare special hooks called “lifecycle methods” to run some code when a component mounts, unmounts, renders new values, etc.

### Commonly Used Lifecycle Methods

- `componentDidMount()` is invoked immediately after a component is mounted.
- `shouldComponentUpdate()` is invoked before rendering when new props or state are being received.
- `componentDidUpdate()` is invoked immediately after updating occurs. This method is not called for the initial.
- `componentWillUnmount()` is invoked immediately before a component is unmounted and destroyed.

### Rarely Used Lifecycle Methods (_React 16.3+_)

- `getDerivedStateFromProps()` is invoked right before calling the render method, both on the initial mount and on subsequent updates.
- `getSnapshotBeforeUpdate()` is invoked right before the most recently rendered output is committed to the DOM.
- `componentDidCatch()` method works like a JavaScript `catch {}` block, but for components.

### Legacy Lifecycle Methods

- `UNSAFE_componentWillMount()` is invoked just before mounting occurs.
- `UNSAFE_componentWillReceiveProps()` is invoked before a mounted component receives new props.
- `UNSAFE_componentWillUpdate()` is invoked just before rendering when new props or state are being received.

> See a [React Lifecycle method diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## Fetching Data: Part 2
