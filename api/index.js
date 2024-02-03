import express from "express";
const app = express();
const port = 9000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port);
export default app;
