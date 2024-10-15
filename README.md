# Example: Making Requests in JavaScript

This project provides an introduction to making HTTP requests in JavaScript. It is intended for use in Thinkful's Web Development curriculum, providing students with hands-on experience using JavaScript to interact with APIs.

## Installation Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/Thinkful-Ed/example-making-requests-requests-in-javascript.git
    ```
2. Navigate into the project directory:
    ```bash
    cd example-making-requests-requests-in-javascript
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

## Project Overview

This project demonstrates how to use JavaScript to make HTTP requests to external APIs. It covers:
- Sending `GET`, `POST`, `PUT`, and `DELETE` requests using JavaScript.
- Handling asynchronous code using promises and async/await.
- Working with APIs by sending data and handling responses.

## How to Use

1. **Making GET Requests:**
    - You will learn how to fetch data from an external API using the `fetch` function and handle the returned promise.
    - Example:
      ```js
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data));
      ```

2. **Sending POST Requests:**
    - This project also demonstrates how to send data to an API using a POST request.
    - Example:
      ```js
      fetch('https://api.example.com/data', {
        method: 'POST',
        body: JSON.stringify({
          key1: 'value1',
          key2: 'value2'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      ```

3. **Error Handling:**
   - You will also learn how to handle errors in HTTP requests using `.catch()` for promises and `try...catch` with async/await.

