const express = require('express');
const app = express();
const port = 8000;

app.get('/', (res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});