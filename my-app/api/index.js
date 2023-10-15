const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10; // Zalecam wykorzystanie bardziej losowo generowanej soli.
const username = 'admin';
const password = 'i5ri1fNyrrImBiDp';

const encodedPassword = encodeURIComponent(password);

const connectionString = `mongodb+srv://${username}:${encodedPassword}@cluster0.8vrqt6j.mongodb.net/database?retryWrites=true&w=majority`;

const User = require('./models/User');
app.use(express.json());
app.use(cors());

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

app.listen(4000);


// const express = require('express')
// const app = express();
// const cors = require('cors');
// const { default: mongoose } = require('mongoose');
// const bcrypt = require('bcrypt');

// const salt = 'huhfs7lf9hcsl9egcoaf';


// const User = require('./models/User');
// app.use(express.json());
// app.use(cors());



// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb+srv://admin:i5ri1fNyrrImBiDp@cluster0.8vrqt6j.mongodb.net/?retryWrites=true&w=majority');
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToDatabase();

// mongoose.connect('mongodb+srv://admin:i5ri1fNyrrImBiDp@cluster0.8vrqt6j.mongodb.net/?retryWrites=true&w=majority')

// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const userDoc = await User.create({
//         username, 
//         password:bcrypt.hashSync(password, salt)
//       });
//       res.json(userDoc);
//     } catch (e) {
//       res.status(400).json(e)
   
//     }
//   });
  

// app.listen(4000)

// const express = require('express');
// const app = express();
// const cors = require('cors');
// const mongoose = require('mongoose');
// const User = require('./models/User');
// app.use(express.json());
// app.use(cors());

// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb+srv://admin:i5ri1fNyrrImBiDp@cluster0.8vrqt6j.mongodb.net/?retryWrites=true&w=majority');
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToDatabase();



// Połączenie z bazą danych
// mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Błąd połączenia:'));
// db.once('open', () => {
//     console.log('Połączenie z bazą danych zostało nawiązane');
// });

// app.listen(4000)

// const express = require('express')
// const app = express();
// const cors = require('cors');
// const { default: mongoose } = require('mongoose');
// const bcrypt = require('bcryptjs');
// const User = require('./models/User');
// app.use(express.json());
// app.use(cors());

// const salt = bcrypt.genSaltSync(10);
// const secret = 'asdfe45we45w345wegw345werjktjwertkj';

// mongoose.connect('mongodb+srv://admin:i5ri1fNyrrImBiDp@cluster0.8vrqt6j.mongodb.net/?retryWrites=true&w=majority')

// app.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//       const userDoc = await User.create({ username, password });
//       res.json(userDoc);
//     } catch (error) {
//       if (error.code === 11000) {
//         // Błąd duplikatu klucza
//         res.status(400).json({ error: 'Użytkownik o tej nazwie już istnieje.' });
//       } else {
//         res.status(500).json({ error: 'Wystąpił błąd serwera.' });
//       }
//     }
//   });
// app.post('/register', async (req,res) => {
//   const {username,password} = req.body;
//   try{
//     const userDoc = await User.create({
//       username,
//       password:bcrypt.hashSync(password,salt),
//     });
//     res.json(userDoc);
//   } catch(e) {
//     console.log(e);
//     res.status(400).json(e);
//   }
// });
  

// app.listen(4000)

