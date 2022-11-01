const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const cookieSession = require('cookie-session');
const authRoute = require('./auth/auth')
require("dotenv").config();
const User = require("./models/User");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

// Import the ApolloServer class
const { ApolloServer } = require("apollo-server-express");

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongoose is connected");
  }
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: { PORT },
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.set("trust proxy", 1);

app.use(
  cookieSession({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: "none",
      secure: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use(cookieParser(process.env.SECRET));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user.id);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      cb(null, profile);
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profile.displayName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("New User Created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "/auth/twitter/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      cb(null, profile);
      User.findOne({ twitterId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profile.username,
            twitterId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("New User Created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
      cb(null, profile);
      User.findOne({ githubId: profile.id }).then((currentUser) => {
        if (currentUser) {
          console.log("user is ", currentUser);
          done(null, currentUser);
        } else {
          new User({
            username: profile.username,
            githubId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("New User Created" + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);


app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("https://synthed.herokuapp.com/");
  }
);

app.get("/auth/twitter", passport.authenticate("twitter"));

app.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("https://synthed.herokuapp.com/");
  }
);

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("https://synthed.herokuapp.com/");
  }
);


app.get('/getuser', (req, res) => {
  res.send(req.user);
})

app.get("/logout", (req, res) => {
  if (req.user) {
    req.logout();
    res.send("Successfully logged out");
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No user with that username");
    else {
      req.login(user, (err) => {
        if (err) throw err;
        res.send("Success!");
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already registered");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User created");
    }
  });
});

app.use("/auth", authRoute);
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
