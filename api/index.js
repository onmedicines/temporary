import express from "express";
const app = express();
const port = 9000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./public/views");

app.get("/", (req, res) => {
  res.render("index.ejs", {
    message: "Hello Anurag!!",
  });
});

app.listen(port);
export default app;
