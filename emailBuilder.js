const axios = require("axios");
require("dotenv").config();

const options = {
  method: "POST",
  url: "https://api.sendinblue.com/v3/smtp/email",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
    "api-key": process.env.MY_API_KEY,
  },
  data: {
    sender: { name: "Mary from MyShop", email: "no-reply@myshop.com" },
    to: [{ email: "hilana.sene@gmail.com", name: "Hilana" }],
    headers: { newKey: "New Value" },
    params: { '"FNAME": "Hilana"': '"LNAME": "Sene"' },
    templateId: 6,
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
