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


app.post('/detectSpam', async (req, res) => {
    try {
      const { chunk } = req.body;
      const response = await openai.createCompletion({
        engine: "text-davinci-003",
        prompt: `${promptCrime}\n${chunk}`,
        temperature: 0.5,
        max_tokens: 1024,
        n: 1,
        stop: null
      });
  
      const services = response.choices[0].text.trim();
      const temp = services.match(/\d+/g);
      const result = temp ? parseInt(temp[0]) : null;
  
      res.json({ Class: result });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while processing the request." });
    }
  });

  
app.post('/detectSpam2', async (req, res) => {
    try {
      const { chunk } = req.body;
      let classification = 3;
  
      if (chunk === "drug dealing") {
        classification = 1;
      } else if (chunk === "child fight") {
        classification = 2;
      }
  
      res.json({ Class: classification });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while processing the request." });
    }
  });
  



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  