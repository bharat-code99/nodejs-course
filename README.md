# Node.js Course

A collection of beginner-friendly examples for learning Node.js fundamentals. The project includes small HTTP servers, a simple in-memory users API, and demonstrations of built-in Node.js modules.

## What You Can Learn

- Create an HTTP server and handle requests with Node's built-in `http` module.
- Build basic GET and POST routes that return JSON.
- Serve HTML files from a `public` directory.
- Explore filesystem, path, URL, operating-system, process, event, and crypto APIs.
- Use ES modules and `async`/`await`.

The examples are intentionally small and are meant to be read and run individually.

## Getting Started

### Prerequisites

- Node.js 20.6 or later (the start command uses Node's `--env-file` option).
- npm.

### Install and run

```bash
git clone https://github.com/bharat-code99/nodejs-course.git
cd nodejs-course
npm install
```

Create a `.env` file in the project root and set a port:

```env
PORT=3000
```

Start the users API server:

```bash
npm start
```

The server listens on the configured port. Its users are stored in memory and reset when the server restarts.

### API routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/users` | Return all users |
| `GET` | `/api/users/1` | Return the user with the specified ID |
| `POST` | `/api/users` | Add a user from a JSON request body |

For example, send a JSON body such as `{"id":4,"name":"Alex Doe"}` to `POST /api/users`.

### Other examples

`server.js` serves the sample pages at `/` and `/about`. Run it directly with the same `.env` configuration:

```bash
node --env-file=.env server.js
```

The scripts in `modulesDemo/` can be run individually, for example:

```bash
node modulesDemo/eventsDemo.js
```

`index.js` demonstrates importing and using the post controller:

```bash
node index.js
```

## Project Structure

| Path | Purpose |
| --- | --- |
| `server2.js` | In-memory users API; used by `npm start` |
| `server.js` | Basic HTTP server that serves the sample HTML pages |
| `public/` | HTML pages served by `server.js` |
| `modulesDemo/` | Standalone examples of Node.js built-in modules |
| `postController.js` | Small example module exporting sample posts |
| `index.js` | Imports and runs the post controller example |
| `utils.js` | Example utility functions |

## Help and Contributions

If you find a problem or have a suggestion, open an issue in the [GitHub repository](https://github.com/bharat-code99/nodejs-course). Contributions are welcome: open a pull request with a focused change and explain what it improves.

## Maintainer

Maintained by Bharat. See the repository's [package metadata](package.json) for project details.

## License

This project is released under the MIT license. See the `license` field in [package.json](package.json).
