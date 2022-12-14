app.use("/static", express.static('./static/'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});