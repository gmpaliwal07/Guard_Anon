const express = require('express');
const bodyParser = require('body-parser');
var OpenAI = require('openai').OpenAI;

const app = express();
const port = process.env.PORT || 3000;


var openai = new OpenAI({
    // apiKey: process.env['OPENAI_API_KEY']
    apiKey: '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'
  });

app.use(bodyParser.json());





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  