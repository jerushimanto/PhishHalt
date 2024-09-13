const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const corsOptions = {
    origin: 'http://localhost:3000', // Correct the origin here
    optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());

const port = 3005;
app.get("/", (req, resp) => {
  resp.send("working...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
