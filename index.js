const express = require('express');
const path = require('path');
const app = express();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'artorias.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
