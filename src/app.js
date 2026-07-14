// Sample application - try adding secrets here to test the hook!
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// ✅ Good practice: using environment variables
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DATABASE_URL;

app.get('/', (req, res) => {
  res.json({ status: 'running', port });
});

app.get('/health', (req, res) => {
  res.json({ healthy: true, timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
