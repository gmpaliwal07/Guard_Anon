const express = require('express');
const bodyParser = require('body-parser');
var OpenAI = require('openai').OpenAI;

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  