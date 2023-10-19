const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10; // Zalecam wykorzystanie bardziej losowo generowanej soli.
const username = 'admin';
const password = 'i5ri1fNyrrImBiDp';
const jwt = require('jsonwebtoken')
const encodedPassword = encodeURIComponent(password);
const secret = 'gdgfcds76f7asg'
const connectionString = `mongodb+srv://${username}:${encodedPassword}@cluster0.8vrqt6j.mongodb.net/database?retryWrites=true&w=majority`;
const User = require('./models/User');
const cookieParser = require('cookie-parser');
const multer  = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
const fs = require('fs');

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use(express.json());
app.use(cookieParser());


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
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userDoc = await User.create({
      username,
      password: hashedPassword,
    });
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
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
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

app.post('/post', uploadMiddleware.single('file'), (req, res) =>{
  //change name of file
  const {originalname, path} = req.file
  const parts = originalname.split('.')
  const ext = parts[parts.length - 1]
  const newPath = path+'.'+ext
  fs.renameSync(path, newPath)
  // res.json({ext})


  //saving dates

})


app.listen(4000);

