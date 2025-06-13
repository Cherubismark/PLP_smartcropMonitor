require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cropRoutes = require('./routes/cropRoutes');
const { connectDB, sequelize } = require('./models/index');
const Crop = require('./models/Crop');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/crops', cropRoutes);

connectDB();

sequelize.sync({ force: false }) // Set to true only if you want to recreate tables
  .then(() => {
    app.use(express.static('public'));

    
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
