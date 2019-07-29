// var gifApiKey = "WzFkDm4nRXP9y9qbvcccaHHehRfi7tH6"
//
// function sendApiRequest(){
//   var input = document.getElementById("input").value;
//
//   var newChild = document.createElement("div");
//   newChild.innerText = input; // sets inside of text the div element t o input
//   // document.body.appendChild(newChild);
//
//
//   if (input === ""){ return;} //makes sure empty string is not sent as request
//
//   var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key= ${gifApiKey}`;
//
//   fetch(giphyApiUrl)  //notworking
//     .then(function(response){
//       return response.json();
//     })
//     .then(function(json){
//       var img = document.createElement("img");
//       // console.log(json["data"][0])
//       img.src = json["data"][0]["images"]["fixed_height"]["url"];
//       document.body.appendChild(img);
//     })
// }

var giphyApiKey = "mxITmr4OQ8EGK31cSBnZ6rNJEa4fLcel";

function sendApiRequest(){
  var input = document.getElementById("input").value;
  //console.log(input);

  var newChild = document.createElement("div");
  newChild.innerText = input;
  document.body.appendChild(newChild);

  var giphyApiUrl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyApiKey}`;

  fetch(giphyApiUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var img = document.createElement("img");
      img.src = json["data"][0]["images"]["fixed_height"]["url"];
      document.body.appendChild(img);
    })


  }
