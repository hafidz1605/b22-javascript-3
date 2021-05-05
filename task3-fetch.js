const fetch = require("node-fetch")

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
  .then(function(data){jumlah=data.length
      for(let x=0;x<jumlah;x++){
      console.log(data[x].name)}})