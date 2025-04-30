const url = `https://twokaybackend.onrender.com/api/`;
const interval = 780000; // Interval in milliseconds (13 min)

function reloadWebsite() {
  fetch(url)
    .then((response) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status Code ${
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
setInterval(reloadWebsite, interval);
