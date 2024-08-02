# Rocketium Backend Assignment

## Overview

This project is a Node.js-based server application developed as part of the Rocketium Backend Assignment. It fetches, stores, and serves dummy JSON data with functionalities for filtering and sorting.

## Objective

This assignment aims to evaluate fundamental skills in Node.js, API handling, and data processing. It assesses coding style, problem-solving abilities, and data handling techniques.

## How to Run

1. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Follow the steps under [Project Setup](#project-setup).

## Project Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AttAditya/rocketium-backend-assignment
   cd rocketium
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Server:**
   ```bash
   npm start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

## Data Integration

1. **Fetching Dummy JSON Data:**
   - The data is fetched from [Dummy JSON Data](https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json) and stored on the server.

2. **Data Initialization:**
   - An initialization script imports the dummy data the first time the project is initialized.

3. **Data Storage:**
    - The data is not stored being stored anywhere. It is fetched from the URL every time the server is started.
    - The data is stored in memory and is lost when the server is stopped.
    - However, since the database module is implemented like an interface, it can be easily replaced with a database implementation.

## API Endpoints

### GET `/api/data`

- Serves the stored dummy JSON data.
- Query Parameters for Filtering:
    - `?name=<name>`: Filter by name.
    - `?language=<language>`: Filter by language.
    - `?version=<version>`: Filter by version.
- Query Parameters for Sorting:
    - `?sort=<field>`: Sort by field (name, language, version).
    - `?desc=true`: Sort in descending order.
- Response:
    ```json
    [
        {
            "id": "ID",
            "name": "Name",
            "language": "Language",
            "version": "Version",
            "bio": "Bio"
        }
    ]
    ```

### GET `/api/data/:id`

- Serves the data with the specified ID.
- Response:
    ```json
    {
        "id": "ID",
        "name": "Name",
        "language": "Language",
        "version": "Version"
    }
    ```

### POST `/api/data`

- Adds a new data entry.
- Request Body:
    ```json
    {
        "name": "Name",
        "language": "Language",
        "version": "Version",
        "bio": "Bio"
    }
    ```
- Response:
    ```json
    {
        "id": "ID",
        "name": "Name",
        "language": "Language",
        "version": "Version",
        "bio": "Bio"
    }
    ```

### PUT `/api/data/:id`

- Updates the data with the specified ID.
- Request Body:
    ```json
    {
        "name": "Name",
        "language": "Language",
        "version": "Version",
        "bio": "Bio"
    }
    ```
- Response:
    ```json
    {
        "id": "ID",
        "name": "Name",
        "language": "Language",
        "version": "Version",
        "bio": "Bio"
    }
    ```

### DELETE `/api/data/:id`

- Deletes the data with the specified ID.
- Response:
    ```json
    {
        "id": "ID",
        "name": "Name",
        "language": "Language",
        "version": "Version",
        "bio": "Bio"
    }
    ```

## Filtering and Sorting

The API supports basic filtering and sorting of the data on the read request. Query parameters can be used to specify the criteria.

## Error Handling

The project includes error handling for invalid requests, missing data, and other edge cases. The server responds with appropriate status codes and error messages.

## Evaluation Criteria

- **Code Quality:** Clean, maintainable, and well-documented code.
- **Project Structure:** Logical and organized structure.
- **Functionality:** Correct implementation of data fetching, display, filtering, and sorting.
- **Error Handling:** Proper handling of errors and edge cases.
- **Documentation:** Clear instructions on setup and usage.

