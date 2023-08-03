const fs = require("fs");

fs.copyFile("./public/index.html", "./build/public/index.html", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
});
fs.copyFile("./public/style.css", "./build/public/style.css", (err) => {
  if (err) {
    console.log("Error Found:", err);
  }
});
