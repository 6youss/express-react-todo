let fs = require("fs");

module.exports = async function fileCopy(sourcePath, copyPath) {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(copyPath);
    fs.stat(sourcePath, (err, stat) => {
      if (err) reject(err);
      const total = stat.size;
      let progress = 0;
      readStream.on("data", chunk => {
        progress += chunk.length;
        const progressPer = ((progress * 100) / total).toFixed(2);
        // if(progressPer % 1 === 0)
        console.log(`read: ${progressPer} %`);
      });
      readStream.pipe(writeStream);
      // readStream.on("data", chunk => {
      //   console.log("writen " + chunk.length);
      // });
      readStream.on("end", () => {
        resolve("copied the file");
      });      
    });
  });
};


/**
 * OR
 * mount the whole file to memory 
 * stupid aprouch
 */


// fs.readFile("video.mkv",(readErr,data)=>{
//   if(readErr) throw readErr

//   fs.writeFile("copy.mkv",data,(writeErr)=>{
//     if (writeErr) throw writeErr

//     console.log("le fichier a bien été copié");

//   })

// })

//::::::::::: node server tuto code ::::::::::::
// const http = require("http");
// const fs = require("fs");
// const EventEmitter = require("events");
// const copy = require("./src/helpers/copy.js/index.js");
// const App = {
//   start(port) {
//     let emitter = new EventEmitter();

//     http
//       .createServer((req, res) => {
//         if (req.url === "/") {
//           emitter.emit("root", res);
//         }
//         res.end();
//       })
//       .listen(port, () => {
//         console.log(`server listening on port ${port}`);
//       });

//     return emitter;
//   }
// };

// const app = App.start(8000);
// app.on("root", res => {
//   res.writeHead(200, {
//     "Content-type": "text/html"
//   });
//   res.write("on root");
// });
