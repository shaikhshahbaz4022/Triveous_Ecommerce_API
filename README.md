# Triveous Ecommerce Backend API

The Triveous Ecommerce Backend API serves as the foundation of our robust and scalable ecommerce platform. Developed by our experienced team, this API provides a wide range of features to support various aspects of online shopping, including user management, product catalog, shopping cart, orders, and more.

## Features

### User

- Register as a user.
- Log in with credentials using JWT token for authentication.
- Log out (blacklist the token).

### Product

- Add products.
- View products (with rate limiter middleware limiting requests to 10 per minute).
- Update product details.
- Delete products.
- Filter products by categories.
- View a particular product by its ID.

### Category

- Add category names.
- Update category names.
- Get category information.
- Delete categories.

### Cart

- Add products to the cart.
- Increment product quantity in the cart.
- Decrement product quantity in the cart.
- Remove products from the cart.

### Order

- Place orders.
- View order history.
- View order details.
- Update order status.

## Tech Stack

Our backend API is built using the following technologies:

- **Node.js:** A server-side JavaScript runtime for building fast and scalable network applications.
- **Express.js:** A minimal and flexible Node.js web application framework that simplifies the development of robust APIs.
- **MongoDB:** A NoSQL database for efficient data storage and retrieval.
- **Mongoose:** An elegant object modeling library for MongoDB, making it easy to manage database interactions.
- **JSON Web Tokens (JWT):** Secure user authentication and authorization.
- **Nodemailer:** A powerful library for sending email notifications.

## Running the Server

To start the backend server, use one of the following commands:

```shell
npm start
# or
node server.js
# or
nodemon server.js
# or
npm run start
# or
npm run server

```

## API Documentation

For detailed information on how to use our API, please refer to the [API documentation](docs/ApiDocs.md).

## Swagger API Docs

You can also access the Swagger API documentation [here](http://54.82.202.67:8080/docs/).

## Database Schema

To understand the data structure of our MongoDB database, explore the [Database Schema](docs/Database_Schema.png).

## Folder Structure

We maintain a clean and organized folder structure for easy navigation and development. Get familiar with it in the [Folder Structure](docs/FolderStructure.md) document.

## Snapshorts Documentation

![Alt text](docs/assets/Screenshot%202023-09-23%20132142.png)
![Alt text](docs/assets/Screenshot%202023-09-23%20132158.png)
![Alt text](docs/assets/Screenshot%202023-09-23%20132211.png)
![Alt text](docs/assets/Screenshot%202023-09-23%20132220.png)

Made with ❤️ by the Triveous Ecommerce Team
