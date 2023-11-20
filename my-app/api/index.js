const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

const saltRounds = 10;
const secret = 'gdgfcds76f7asg';
const connectionString = `mongodb+srv://admin:admin@cluster0.ejp2zb5.mongodb.net/`;
const User = require('./models/User');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const Post = require('./models/Post');
const Satellite = require('./models/Satellites');
const Planets = require('./models/Planets');

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // Czas życia sesji w milisekundach (24 godziny)
  },
}));

app.use('/uploads', express.static(__dirname + '/uploads'));





async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString ,
     { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connectToDatabase();

app.post('/register', async (req, res) => {
  const { name, lastname, username, email, password, profileImage} = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userDoc = await User.create({
      name,
      lastname,
      username,
      email,
      password: hashedPassword,
      profileImage,
    });
    res.json(userDoc);
  } catch (error) {
    console.error('Error while registering user:', error);
    res.status(400).json({ error: 'Registration failed' });
  }
});


app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });

  if (!userDoc || !bcrypt.compareSync(password, userDoc.password)) {
    return res.status(400).json({ message: 'Wrong credentials' });
  }

  req.session.userId = userDoc._id; // Ustawienie ID użytkownika w sesji

  res.json({
    id: userDoc._id,
    username: userDoc.username,
  });
});

app.get('/profile', async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json({
    name: user.name,
    lastname: user.lastname,
    username: user.username,
    email: user.email,
    profileImage: user.profileImage,
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy(); // Usunięcie sesji po wylogowaniu
  res.json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    // Sprawdź, czy użytkownik jest zalogowany na podstawie sesji
    const userId = req.session.userId;

    if (!userId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { title, summary, content } = req.body;

    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: userId,
    });

    res.json(postDoc);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/post', async (req, res) => {
  const posts = await Post.find()
    .populate('author', ['username'])
    .sort({ createdAt: -1 }) // Sortowanie wyników według createdAt w kolejności malejącej
    .limit(20); // Ograniczenie wyników do 20

  res.json(posts);
});

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
})


app.get('/satellites', async (req, res) => {
  try {
    const searchQuery = req.query.search;
    if (!searchQuery) {
      // Jeśli brak parametru "search", zwróć pustą tablicę lub odpowiedni komunikat błędu
      return res.status(400).send('Brak danych wyszukiwania.');
    }
    // Pobranie danych z kolekcji Satellite
    const satellites = await Satellite.find({
      $or: [
        { SatelliteName: { $regex: searchQuery, $options: 'i' } }, 
        { Country: { $regex: searchQuery, $options: 'i' } }, 
      ],
    });

    if (satellites.length === 0) {
      return res.status(404).send('Brak pasujących danych.');
    }

    res.json(satellites);
  

  } catch (error) {
    console.error(error);
    res.status(500).send('Wystąpił błąd podczas pobierania danych z bazy danych.');
  }
});


app.get('/planets', async (req, res) => {
  try {
    const planets = await Planets.find();

    if (planets.length === 0) {
      return res.status(404).send('Brak danych planet.');
    }


    res.json(planets);
  } catch (error) {
    console.error(error);
    res.status(500).send('Wystąpił błąd podczas pobierania danych z bazy danych.');
  }
});



app.get('/myprofile', async (req, res) => {
  try {

    const user = await User.findOne({});

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }


    res.json({
      name: user.name,
      lastname: user.name,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,

    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



app.listen(4000);

