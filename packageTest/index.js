// const figlet = require("figlet");
import figlet from "figlet";

for(let i=2; i<process.argv.length; i++){

  figlet(process.argv[i], function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}

// figlet.fonts(function (err, fonts) {
//   if (err) {
//     console.log("something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.dir(fonts);
// });