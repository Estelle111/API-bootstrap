var requestURL = 'https://project-622bb.firebaseio.com/BeCode.json';
var request = new XMLHttpRequest();

request.onload = function() {
  if (this.readyState == 4 && this.status == 200) {
    var requestURL = JSON.parse(this.responseText);
    myFunction(requestURL);
  }
};
request.open('GET', requestURL);
request.send();


function myFunction(requestURL) {
  var out = "";
  var i;
  for(i = 0; i < requestURL.length; i++) {
    out += '<p="' + requestURL[i].request + '">' + 
    requestURL[i].display + '</p><br>';
  }
  console.log(document.getElementById("article").innerHTML = out);
}




// request.onload = function() {
//     var lovelace = request.response;
// }

  