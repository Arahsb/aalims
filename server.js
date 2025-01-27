const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

app.use(express.static('public')); // Serve static files from the public directory

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
