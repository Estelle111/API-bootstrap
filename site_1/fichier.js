window.onload=function(){
const req = new XMLHttpRequest();
req.open('GET', 'https://project-622bb.firebaseio.com/BeCode.json/', false);
req.send();


    if (req.status === 200) {
        console.log(req)
        let data = JSON.parse(req.response)
        let section=document.getElementsByTagName("section")[0]
        let row = document.createElement("div");
        let container = [];
        for (let i in data) {
            let history = document.createElement("p");
            let image = document.createElement("img");
            let profile = document.createElement("h2");
            let wiki = document.createElement("a");
            container[i] = document.createElement("div");

            section.className = "container-fluid";
            row.className="row";
            container[i].className = "div ml-auto mr-auto col-xs-12 col-sm-6 col-md-4 col-lg-3";
            history.className = "text";
            image.className = "img-responsive img-circle img-thumbnail center-block";
            

            history.textContent = data[i].history;
            image.src = data[i].image;
            profile.textContent = data[i].profile.firstname + " " + data[i].profile.lastname;
            wiki.href = data[i].wiki;
            wiki.textContent = data[i].profile.firstname + " " + data[i].profile.lastname;

            section.appendChild(row);
            row.appendChild(container[i]);
            container[i].appendChild(profile);
            container[i].appendChild(image);
            container[i].appendChild(history);
            container[i].appendChild(wiki);
        }
    } else {
    console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
    }
    
}