const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Sample data - replace with a database in production
let wallpapers = [
  { id: 1, title: 'Mountain Sunset', price: 2, imageUrl: 'url_to_image_1' },
  { id: 2, title: 'Ocean Waves', price: 2, imageUrl: 'url_to_image_2' },
  // Add more wallpapers here
];

// Routes
app.get('/api/wallpapers', (req, res) => {
  res.json(wallpapers);
});

app.get('/api/wallpapers/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const wallpaper = wallpapers.find(w => w.id === id);
  if (wallpaper) {
    res.json(wallpaper);
  } else {
    res.status(404).json({ message: 'Wallpaper not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
