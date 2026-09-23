const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from my CI/CD Pipeline on Vercel!');
});

// Important for local development, but Vercel will handle routing in production
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// EXPORT the app instance for Vercel's serverless functions
module.exports = app;
