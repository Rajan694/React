const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "c214e740-8554-41a8-981b-968865e0aeb8" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);

// require("dotenv").config();

// const express = require("express");
// const cors = require("cors");
// const axios = require("axios");

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: true }));

// app.post("/signup", async (req, res) => {
//   const { username, secret, email, first_name, last_name } = req.body;

//   // console.log("Write user into DB.");
//   // return res.json({ user: {} });

//   // Store a user-copy on Chat Engine!
//   try {
//     const r = await axios.post(
//       "https://api.chatengine.io/users/",
//       { username, secret, email, first_name, last_name },
//       { headers: { "Private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY } }
//     );
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, secret } = req.body;

//   // console.log("Fetch user from DB.");
//   // return res.json({ user: {} });

//   // Fetch this user from Chat Engine in this project!
//   try {
//     const r = await axios.get("https://api.chatengine.io/users/me/", {
//       headers: {
//         "Project-ID": process.env.CHAT_ENGINE_PROJECT_ID,
//         "User-Name": username,
//         "User-Secret": secret,
//       },
//     });
//     return res.status(r.status).json(r.data);
//   } catch (e) {
//     return res.status(e.response.status).json(e.response.data);
//   }
// });

// app.listen(3001);
