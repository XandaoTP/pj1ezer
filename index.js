
const service = require('./src/service');

const port = process.env.PORTA || 3000;

const listener = service.listen(porta, function () {
  console.log("Node.js listening on port " + listener.address().port);
});






