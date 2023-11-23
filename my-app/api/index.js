const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10; // Zalecam wykorzystanie bardziej losowo generowanej soli.
const username = 'admin';
// const password = 'i5ri1fNyrrImBiDp';
const jwt = require('jsonwebtoken')
// const encodedPassword = encodeURIComponent(password);
const secret = 'gdgfcds76f7asg'
const connectionString = `mongodb+srv://admin:admin@cluster0.ejp2zb5.mongodb.net/`
const User = require('./models/User');
const cookieParser = require('cookie-parser');
const multer  = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs');
const Post = require('./models/Post')
const Satellite = require('./models/Satellites');
const Planets = require('./models/Planets')


app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(cookieParser());
// app.use(express.static('uploads'))
// app.use('uploads', express.static(__dirname + '/uploads'))

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
  const { username, password, profileImage } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userDoc = await User.create({
      username,
      password: hashedPassword,
      profileImage
    });
    // console.log(userDoc)
    res.json(userDoc);
  } catch (error) {
    console.error('Error while registering user:', error);
    res.status(400).json({ error: 'Registration failed' });
  }
});



app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {


    // logged in
    jwt.sign({ username, id: userDoc._id, profileImage: userDoc.profileImage }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id: userDoc._id,
        username,
        profileImage: userDoc.profileImage,
      });
      
    });


  } else {
    res.status(400).json('wrong credentials');
  }
});


app.get('/profile', (req, res) =>{
  const {token} = req.cookies;
jwt.verify(token, secret, {}, (err,info) =>{
  if(err) throw err;
  res.json(info)
})

})


app.post('/logout', (req,res) => {
  res.clearCookie('token').json('ok');
})

// app.post('/logout', (req,res) => {
//   // res.cookie('token', '').json('ok');
// });

// app.post('/post', uploadMiddleware.single('file'), async (req, res) =>{
//   //change name of file
//   const {originalname, path} = req.file
//   const parts = originalname.split('.')
//   const ext = parts[parts.length - 1]
//   const newPath = path+'.'+ext
//   fs.renameSync(path, newPath)
//   // res.json({ext})

//   const {token} = req.cookies;

//   jwt.verify(token, secret, {}, async (err,info) =>{
//     if(err) throw err;
//     res.json(info)
//     const {title, summary, content} = req.body
//     //saving dates
//     const postDoc = await Post.create({
//       title, 
//       summary,
//       content,
//       cover: newPath,
//       author:info.id
//     })
    
//   res.json(postDoc)
//   }) 

app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {title,summary,content} = req.body;

    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  });

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







app.listen(4000);