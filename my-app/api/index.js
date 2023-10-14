const express = require('express')
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const User = require('./models/User');
app.use(express.json());
app.use(cors());



mongoose.connect('mongodb+srv://admin:i5ri1fNyrrImBiDp@cluster0.8vrqt6j.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
      const userDoc = await User.create({ username, password });
      res.json(userDoc);
    } catch (error) {
      if (error.code === 11000) {
        // Błąd duplikatu klucza
        res.status(400).json({ error: 'Użytkownik o tej nazwie już istnieje.' });
      } else {
        res.status(500).json({ error: 'Wystąpił błąd serwera.' });
      }
    }
  });
  

app.listen(4000)