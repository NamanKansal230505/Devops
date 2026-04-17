const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  const host = '0.0.0.0';
  app.listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
  });
}
