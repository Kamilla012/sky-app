const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const saltRounds = 10; // Zalecam wykorzystanie bardziej losowo generowanej soli.
// const username = "admin";
// const password = 'i5ri1fNyrrImBiDp';
const jwt = require("jsonwebtoken");
// const encodedPassword = encodeURIComponent(password);
const secret = "gdgfcds76f7asg";
const connectionString = `mongodb+srv://admin:1234@cluster0.ejp2zb5.mongodb.net/`;
const User = require("./models/User");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const Post = require("./models/Post");
const Satellite = require("./models/Satellites");
const Planets = require("./models/Planets");

///add socket.io conf
const io = require("socket.io")(4001, {
  cors: { origin: ["http://localhost:3000"] },
});

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(cookieParser());
// app.use(express.static('uploads'))
// app.use('uploads', express.static(__dirname + '/uploads'))

app.use("/uploads", express.static(__dirname + "/uploads"));

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

//io

connectToDatabase();






// io.on("connection", (socket) => {
//   console.log("a user conncected", socket.id);
// });



io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("likeUpdateRequest", async (data) => {
    try {
      const post = await Post.findByIdAndUpdate(
        data.postId,
        {
          $inc: { likes: data.isLiked ? 1 : -1 },
        },
        { new: true }
      );

      io.emit("likeUpdate", { postId: data.postId, likeCount: post.likes });
    } catch (error) {
      console.error("Error updating like:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/posts/:postId/likes", async (req, res) => {
  const postId = req.params.postId;

  try {
    const post = await Post.findById(postId);
    if (post) {
      res.json({ likeCount: post.likes });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});




// io.on("connection", (socket) => {
//   console.log("a user connected", socket.id);

//   socket.on("likeAdded", async (data) => {
//       console.log(`Like added for post ${data.postId}. Liked: ${data.isLiked}`);

//       try {
//           const post = await Post.findById(data.postId);

//           if (post) {
//               post.likes = data.isLiked ? post.likes + 1 : post.likes - 1;
//               await post.save();

//               io.emit("likeUpdate", { postId: data.postId, isLiked: data.isLiked });
//           }
//       } catch (error) {
//           console.error("Error updating likes:", error);
//       }
//   });

//   socket.on("disconnect", () => {
//       console.log("User disconnected", socket.id);
//   });
// });




// io.on('connection', (socket) => {
//   console.log('a user connected');

//   // Nasłuchuj zdarzenia likePost
//   socket.on('likePost', (postId) => {
//     // Tutaj możesz zaimplementować logikę zapisywania polubień w bazie danych
//     console.log(`Post liked: ${postId}`);

//     // Wysyłaj informacje o zdarzeniu do wszystkich klientów
//     io.emit('updateLikesCount', { postId, likesCount: 1 }); // Przykładowa liczba polubień
//   });

//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });














app.post("/register", async (req, res) => {
  const { fname, lname, username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userDoc = await User.create({
      fname,
      lname,
      username,
      email,
      password: hashedPassword,
    });

    res.json(userDoc);
  } catch (error) {
    console.error("Error while registering user:", error);
    res.status(400).json({ error: "Registration failed" });
  }
});

app.post("/login", async (req, res) => {
  const { fname, lname, email, username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign(
      {
        id: userDoc._id,
        fname: userDoc.fname,
        lname: userDoc.lname,
        email: userDoc.email,
        username,
        profileImage: userDoc.profileImage,
      },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          fname,
          lname,
          email,
          username,
          profileImage: userDoc.profileImage,
        });
      }
    );
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post("/logout", (req, res) => {
  res.clearCookie("token").json("ok");
});

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

app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);

  const { token } = req.cookies;
  jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    console.log("Decoded Token Information:", info);
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  });
});

app.get("/post", async (req, res) => {
  const posts = await Post.find()
    .populate("author", ["username"])
    .sort({ createdAt: -1 }) // Sortowanie wyników według createdAt w kolejności malejącej
    .limit(20); // Ograniczenie wyników do 20

  res.json(posts);
});

app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await Post.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

// Dodawanie polubienia
app.post("/post/:id/like", async (req, res) => {
  const postId = req.params.id;
  const { token } = req.cookies;

  try {
    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.like(userId);

    res.json({ likes: post.likes.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Wyświetlanie liczby polubień
app.get("/post/:id/likes", async (req, res) => {
  const postId = req.params.id;

  try {
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json({ likes: post.likes.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Usuwanie polubienia
app.post("/post/:id/unlike", async (req, res) => {
  const postId = req.params.id;
  const { token } = req.cookies;

  try {
    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken.id;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await post.unlike(userId);

    res.json({ likes: post.likes.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/satellites", async (req, res) => {
  try {
    const searchQuery = req.query.search;
    if (!searchQuery) {
      // Jeśli brak parametru "search", zwróć pustą tablicę lub odpowiedni komunikat błędu
      return res.status(400).send("Brak danych wyszukiwania.");
    }
    // Pobranie danych z kolekcji Satellite
    const satellites = await Satellite.find({
      $or: [
        { SatelliteName: { $regex: searchQuery, $options: "i" } },
        { Country: { $regex: searchQuery, $options: "i" } },
      ],
    });

    if (satellites.length === 0) {
      return res.status(404).send("Brak pasujących danych.");
    }

    res.json(satellites);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Wystąpił błąd podczas pobierania danych z bazy danych.");
  }
});

app.get("/planets", async (req, res) => {
  try {
    const planets = await Planets.find();

    if (planets.length === 0) {
      return res.status(404).send("Brak danych planet.");
    }

    res.json(planets);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send("Wystąpił błąd podczas pobierania danych z bazy danych.");
  }
});

app.listen(4000);
