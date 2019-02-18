var requestURL = 'https://project-622bb.firebaseio.com/BeCode.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var lovelace = request.response;
  }