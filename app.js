const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const url = `https://twokaybackend.onrender.com/api/`;
const interval = 700000; // Interval in milliseconds (13 min)

function reloadWebsite() {
  fetch(url)
    .then((response) => {
      console.log(
        `Reloaded 2k backend at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

function reloadThis() {
  fetch("https://twokaytrackercron.onrender.com")
    .then((response) => {
      console.log(
        `Reloaded cron job at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

setInterval(reloadThis, interval);
setInterval(reloadWebsite, interval);
