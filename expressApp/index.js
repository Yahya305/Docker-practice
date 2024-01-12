const express = require("express");
const fs= require("fs/promises")
const app = express();
const port = 8000;

app.get("/", async (req, res) => {
    await fs.appendFile("./logs/file.txt", "Hello World!\n");

    res.send("Hello World!");
});

app.listen(
    port,

    () => {
        console.log(`Server listening on port ${port}`);
    }
);
