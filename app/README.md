## Application Structure

- `actions`: Contains all of the actions that can mutate the app state.
- `api`: Async functions that fetch and push data through a `RESTful` interface.
- `components`: Stateless UI components.
- `containers`: Components that connect the state from the redux store with the stateless UI components.
- `pages`: Top level components that render a page in the app.
- `reducers`: Pure functions that take an action and compute the new state tree.
- `services`: Functions for communicating with the `electron` main process.
- `store`: Functions for creating the redux store with middlewares.

### Main process

The `electron` main process is defined in `main.development.js`.
It defines the event handlers for requests from the render process.

### Routes

All of the routes in the app are defined in `routes.jsx`.
