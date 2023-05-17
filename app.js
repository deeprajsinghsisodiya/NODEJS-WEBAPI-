
const express = require('express');

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

const j = {
  skills: ['ram','narayan']
}
console.log(j);
var res = JSON.stringify(j);
console.log(res);


app.post('/', (req, res) => {
  const { skills } = req.body;

  // Process the skills as needed
  console.log(skills);

  res.json(j);
});

app.listen(port, () => {
  console.log(`API app is running on port ${port}`);
});



// const express = require('express');

// const app = express();
// const port = process.env.PORT || 2000;

// app.get('/', (req, res) => {
//   const response = {
//     status: true,
//     message: 'Profile updated successfully',
//   };

//   res.json(response);
// });

// app.listen(port, () => {
//   console.log(`API app is running on port ${port}`);
// });




// var express = require("express"); 
// var app = express();
// const request = require('request');

// const options = {  
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Accept-Charset': 'utf-8',
//         'User-Agent': 'my-reddit-client'
//     }
// };

// const res = {
    
//         "status": true,
//         "message": "Profile updated successfully"
      
// }


// app.get("/api", function(req, res)  { 
// //closing the request function

// // var json = JSON.parse(res);
// // console.log(json); // Logging the output within the request function
// res(res)
// });

// // app.get("/api", function(req, res)  { 
// //         request(options, function(err, output, body) {  
// //         var json = JSON.parse(body);
// //         console.log(json); // Logging the output within the request function
// //         res.json(json) //then returning the response.. The request.json is empty over here
// // }); //closing the request function

// // });

// app.listen(3000, function() {  
//     console.log("My API is running...");
// });

// module.exports = app;


// const http = require("http"); 
// const fs = require("fs");
// console.log("sss");
// const PORT = process.env.PORT || 2000;
// const home = fs.readFileSync("./index.html","utf-8");

// const server = http.createServer((req,res)=>{
 
//     if (req.url==="/"){
//        return res.end(home);
//     }
//     if (req.url==="/about"){
//         return res.end("<h1>About Page</h1>");
//     }
//     if (req.url==="/contact"){
//         return res.end("{
//             "status": true,
//             "message": "Profile updated successfully",
//           }");
//     }
//     if (req.url==="/service"){
//         return res.end("<h1>Service Page</h1>");
//     }
//     else {
//         return res.end("<h1>Page not ound</h1>");
//     }
// });

// server.listen(PORT,"localhost",()=>{
// console.log("running on http://localhost:2000");
// });
