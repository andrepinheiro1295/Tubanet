import express from "express";
//import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
 
app.use(express.static("resources"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    res.render("index.ejs", {
        monitor: monitor,
        microfone: microfone,
        mouse: mouse,
    });
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

