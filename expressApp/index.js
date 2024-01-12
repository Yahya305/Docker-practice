const express = require("express");
const fs= require("fs/promises")
const cors= require("cors")
const app = express();
const port = 8000;

app.use(cors({
    credentials: true,
    origin: "*",
}))

app.get("/", async (req, res) => {
    await fs.appendFile("./logs/file.txt", "Hello World!\n");
    res.send("Hello World!");
});

app.get("/get-hello", async (req, res) => {
    res.json("Hello World!");
});

app.listen(
    port,
    () => {
        console.log(`Server listening on port ${port}`);
    }
);
