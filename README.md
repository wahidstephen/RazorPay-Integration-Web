This project is a full-stack application made using React.JS and Node.JS for a sample RazorPay integration module for Level App. Used Express.JS framework for Node and also integrated valid alerts and basic routing in the React app.

## How to run the server code (Node.JS)

**In the project directory, open a terminal session and you can run:**

### `cd rzrpay-server`

Goes to the path of the Node.JS code.

### `npm install`

Installs the required modules for the Node.JS code.

### `node server.js`

Runs the server in the development mode on port 8000.<br />
Server is now listening on [http://localhost:8000](http://localhost:8000).

## How to run the client code (React.JS)

**In the project directory, open a new terminal session and you can run:**

### `cd rzrpay-client`

Goes to the path of the React.JS code. 

### `npm install`

Installs the required modules for the React.JS code. 

### `npm start`

Runs the React app in the development mode.<br />
Open [http://localhost:3000](http://localhost:8000) to view it in the browser.

## How to use the React App to test the RazorPay integration

### Click on Payments on the Sidebar

The React app uses routing to route to the payments component

### Enter any amount and click on "PAY"

This should redirect you to the Razorpay payment checkout. Appropriate validations and alerts on `success` and `failure` responses are implemented as well.

# rzrpay-integration
