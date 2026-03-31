require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const TARGET_URL = process.env.TARGET_URL;

// Redirect all requests to the target URL with 301 (permanent redirect)
app.get('*', (req, res) => {
  res.redirect(301, TARGET_URL);
});

app.listen(PORT, () => {
  console.log(`Redirect server running on port ${PORT}`);
  console.log(`Redirecting all traffic to: ${TARGET_URL}`);
});
