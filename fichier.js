window.onload=function(){
const req = new XMLHttpRequest();
req.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json/', false);
req.send();
let section=document.getElementsByTagName("section")[0]
// let row = document.createElement("div");
// row.className="row";


    if (req.status === 200) {
        console.log(req)
        let test = JSON.parse(req.response)
        let container = [];
        for (let i in test) {
            let history = document.createElement("p");
            let image = document.createElement("img");
            let profile = document.createElement("h2");
            let wiki = document.createElement("a");
            let element = document.createElement("div")
            container[i] = document.createElement("div");

            
            container[i].className = "content";

            history.textContent = test[i].history;
            image.src = test[i].image;
            profile.textContent = test[i].profile.firstname + " " + test[i].profile.lastname;
            wiki.href = test[i].wiki;
            wiki.textContent = test[i].profile.firstname + " " + test[i].profile.lastname;

            container[i].appendChild(element);
            element.appendChild(profile);
            element.appendChild(image);
            element.appendChild(history);
            element.appendChild(wiki);

            section.appendChild(container[i]);
        }
    } else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
    
}