const dotenv = require('dotenv');

// getting all ENV variables before starting another processes
dotenv.config();

module.exports = {
    mongoDbUrl: "mongodb+srv://anishgogia:anish1234@cluster0.x6qq2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    stripeSecretKey: "sk_test_51KBdY3SB0xXDy3cUbZS5xMICGTcOMSF47cXhlzQI1XMxvLJ3Bv2oZxIkY1p3q3JYr6FbrQfADpJcj8UaZ8Zuryxg00rsWOm30i",
    port: 3000
}
