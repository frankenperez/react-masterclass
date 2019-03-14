# Lab 03 - Data Management

- [Lab 03 - Data Management](#lab-03---data-management)
  - [Getting a full fake REST API with json-server](#getting-a-full-fake-rest-api-with-json-server)
    - [Install JSON Server](#install-json-server)
    - [Adding mocked data to your project](#adding-mocked-data-to-your-project)
    - [Starting JSON Server](#starting-json-server)
  - [React Lifecycle Methods](#react-lifecycle-methods)
    - [Commonly Used Lifecycle Methods](#commonly-used-lifecycle-methods)
    - [Rarely Used Lifecycle Methods (_React 16.3+_)](#rarely-used-lifecycle-methods-_react-163_)
    - [Legacy Lifecycle Methods](#legacy-lifecycle-methods)
  - [Fetching Data in React](#fetching-data-in-react)
    - [Fetch API _versus_ Axios Library](#fetch-api-_versus_-axios-library)
    - [Using Axios](#using-axios)

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
      "title": "Create a Top 10 List",
      "detail": "Brainstorm a dozen numbered lists related to my business: Trends. Insights. Tips. To-do. To avoid. To visit. To eat. To see. To experience"
    }, {
      "id": "2",
      "title": "Tip Of The Day",
      "detail": "List of quick tips to post each day during a month"
    }, {
      "id": "3",
      "title": "Guest Bloggers",
      "detail": "Find other experts or business owners in tangential businesses or industries and invite them to write posts to publish on my blog."
    }
  ]
}
```

### Starting JSON Server

To be able to run two scripts at the same time we can use the `concurrently` library. To install it, run the following command:

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

## Fetching Data in React

React doesn't prescribe a specific approach to data fetching, but people commonly use either the `fetch()` API provided by the browser or a library like axios.

To initiate a component with remote data, React components have many useful **lifecycle hooks**.

### Fetch API _versus_ Axios Library

Fetch is a low level API which with some known issues:

- Fetch requires an extra step to extract the JSON from a response.
- In a `Fetch` request, you will get `error` only if network error is encountered while in all other cases if will log `ok`.
- By default, `Fetch` does not send cookies with API calls.
- Fetch does not support by default some functionalities: timeout, uploading progress or cancelling request.

> Learn more about the [JavaScript Fetch API][js-fetch] and [how to use it][js-fetch-howto].

[js-fetch]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[js-fetch-howto]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Therefore, in most applications Fetch API should not be used directly. Fortunately, there are other options out there for making
HTTP requests. One of those options is **Axios** library.

Axios.js is a promise-based HTTP client for the browser and Node.js with some advantages over Fetch:

- It will reject the request promise if a response with status code in the `4xx` or `5xx` range is returned.
- It performs automatic JSON data transformation and supports upload progress.
- It has ways to abort a request or to set a response timeout.
- It automatically sends cookies back to the server when making a request and has built-in CSRF protection.
- It can be used in both the browser and Node.js and facilitates sharing JavaScript code between the browser and the back end.

> Visit [Axios Documentation][axios] to know more.

[axios]: https://github.com/axios/axios#request-config

### Using Axios

The `componentDidMount` method is is the best place to put calls to fetch data by default for two reasons:

- The data won’t be loaded until after the initial render and reminds you to set up initial state properly.
- Let you handle the case where the data to be rendered is empty.

1. Install Axios:

    ```bash
    npm install axios -save
    ```

2. Open your `Board` component and import axios:

    ```javascript
    /* Board.jsx */

    import axios from 'axios';
    ```

3. In your `Board.jsx` file create a `componentDidMount` method to fetch the data from the json-server:

    ```javascript
    /* Board.jsx */

    async componentDidMount() {
      try {
        const response = await axios.get('http://localhost:3001/ideas');
        this.setState({ ideas: response.data});
      } catch (error) {
        error => console.log(error);
      }
    }
    ```

4. Add an initial empty state to ideas:

    ```javascript
    /* Board.jsx */
    this.state = {
      darkMode: false,
      idea: []
    };
    ```

5. Create a new `Card` component to render each idea:

    ```javascript
    /* Card.jsx */
    import React from 'react';
    import './Card.scss';

    class Card extends React.Component {
      render(){
        return (
          <div className="Card">
            <p className="Card__title">{this.props.idea.title}</p>
            <p className="Card__detail">{this.props.idea.detail}</p>
          </div>
        );
      }
    }

    export default Card;
    ```

    ```scss
    /* Card.scss */

    .Card{
      display: flex;
      flex-direction: column;
      width: 230px;
      height: 320px;
      margin: 0.75rem;
      padding: 1rem;
      border-radius: 2px;
      background-color: #f4f4f4;
      opacity: 0.75;
      transition: opacity 0.4s ease-in-out;
      overflow: hidden;

      &:hover,
      &:focus{
        cursor: pointer;
        opacity: 1;
      }

      .Card__title{
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
    ```

6. Into the render method of your Board component include the following content. You can build a collections of data, loop through this array using the JavaScript `map()` function and return an element for each item in the array. Usually you would render lists inside a component, which accepts an array of data and outputs an unordered list of elements. Assign a new key prop to each list item. A `key` is a special attribute you need to include when creating lists to help React identify which item has changed, added, removed, etc. The best way to pick a key is to use a unique string to identify a list item. You can use the IDs from your data.

   Also, create an empty card to add a new item. In the next lab we will add an onClick action to create new ideas:

    ```javascript
    /* Board.jsx */
      render() {
        return (
          <div className={`Board Board--${this.state.darkMode ? 'dark' : 'light'}`}>
            <button className="Board__switcher" onClick={this.switchMode}>
              Switch Mode
            </button>
            <div className="Board__grid">
              <div className="NewItem">
                <i className="NewItem__icon">+</i>
                <span>Add new idea</span>
              </div>
              {this.state.ideas && this.state.ideas.reverse().map((idea) =>
                <Card key={idea.id}
                  idea={idea}
                />
              )}
            </div>
          </div>
        );
      }
    ```

    Using indexes as keys is not recommend if the order of items may change because can negatively impact performance and may cause issues with component state.

    > Learn more about [Lists and Keys in React](https://reactjs.org/docs/lists-and-keys.html)

7. And, finally, add the following styles:

    ```scss
    /* Board.scss */

    .Board__grid{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
    }

    .NewItem{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 230px;
      height: 320px;
      margin: 0.75rem;
      padding: 1rem;
      border-radius: 2px;
      background-color: #f4f4f4;
      opacity: 0.75;
      transition: opacity 0.4s ease-in-out;

      &:hover,
      &:focus{
        cursor: pointer;
        opacity: 1;
      }

      .NewItem__icon{
        display: block;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-bottom: 1.5rem;
        font-size: 5rem;
        text-align: center;
        line-height: 100px;
        background-color: #ccc;
      }
    }

    ```

[< Prev](../lab-02-react-fundamentals) | [Next >](../lab-04-forms)
