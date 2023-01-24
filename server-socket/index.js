const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

app.use(cors("*"));

app.get("/", (req, res) => {
  res.send(`Server is running at ${new Date()}`);
});

http.listen(4000, () => console.log(`Server running on port 4000`));

io.on("connection", (socket) => {
  console.log("client connected");
  dataUpdate(socket);
});

function dataUpdate(socket) {
  const vaccums = [];

  vaccums.push({ name: "Inglesa", value: Math.floor(Math.random() * 500) });
  vaccums.push({
    name: "Americana",
    value: Math.floor(Math.random() * 500),
  });
  vaccums.push({
    name: "China",
    value: Math.floor(Math.random() * 500),
  });
  vaccums.push({
    name: "Alemana",
    value: Math.floor(Math.random() * 500),
  });
  vaccums.push({
    name: "Rusa",
    value: Math.floor(Math.random() * 500),
  });

  socket.emit(
    "dataupdate",
    vaccums
    // Array.from({ length: 3 }, () => Math.floor(Math.random() * 50))
  );

  setTimeout(() => {
    dataUpdate(socket);
  }, 6000);
}
