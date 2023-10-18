const express = require("express");
const cors = require("cors");

const app = express();

// Make it possible to serve other apps on the same computer
app.use(cors());

const PORT = 3123;

app.get("/", (req, res) => {
    res.send({message: "Hello from backend"});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));