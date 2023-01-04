// const express = require("express");
// const routes =require("./routes/authRoutes");
// const app= express();

// //ACCEPT THE JSON
// app.use(express.json());

// //Accept body
// app.use(express.urlencoded({extended:true}));
// //use html
// app.use(express.static("Public"))

// app.use("/api/v1", routes);
// const PORT =1338;

// app.listen(PORT, () => {
//   console.log('App id running at Port=',PORT);
// });
const express = require("express");
const auth = require("./routes/authRoutes");
const app = express();
const PORT = 1338;

// Middlewares
app.use(express.json()); //* used for parsing json data
app.use(express.static("public")); //* used to serve html files from public folder

// Routes
app.use("/api/v1", auth);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});