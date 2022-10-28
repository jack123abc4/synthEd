const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
require('dotenv').config();
const User = require('./models/User')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// Import the ApolloServer class
const { ApolloServer } = require("apollo-server-express");

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("Mongoose is connected")
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))


app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
}));


app.use(cookieParser(process.env.SECRET));





// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
        if (!user) res.send("No user with that username");
        else {
          req.login(user, err => {
            if (err) throw err;
            res.send('Success!')
          })
        }
    })(req, res, next)
  
  });
  app.post("/register", (req, res) => {
    User.findOne({username: req.body.username}, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already registered");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          user: req.body.user,
          password: hashedPassword
        });
        await newUser.save();
        res.send("User created")
      }
    })
  });

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
