import express from "express";
const app = express();
const port = 9000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", {
    arr: [1, 2, 3, 4, 5, 6],
  });
});

app.listen(port);
export default app;
