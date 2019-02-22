window.onload=function(){
    
    function search() {
        // met une page blanche à chaque recherche
        // permet de remplacer le résultat de la nouvelle recherche au résultat de l'ancienne
        document.querySelector("section").innerHTML="";

        const req = new XMLHttpRequest();
        let userInput = document.querySelector("input").value;
        req.open('GET', 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + userInput, false);
        req.send();

        if (req.status === 200) {
            console.log(req)
            let data = JSON.parse(req.response)
            let row = document.createElement("div");
            let section = document.getElementsByTagName("section")[0]
            console.log(data)

            for (let i in data[1]) {

                // crée les éléments html à partir de js
                let title = document.createElement("h3");
                let descr = document.createElement("p");
                let but = document.createElement("button")
                let link = document.createElement("a");
                let container = document.createElement("div");
                let card = document.createElement("div");

                // ajoute le contenu de l'API dans les emplacements html créés
                // contenu dispaché en tableaux [][]
                title.textContent = data[1][i];
                descr.textContent = data[2][i];
                link.href = data[3][i];
                link.textContent = "WikiLinks"

                // dispose un ordre d'affichage des éléments et les affiche
                section.appendChild(row);
                row.appendChild(card);
                card.appendChild(container);
                container.appendChild(title);
                container.appendChild(descr);
                container.appendChild(but);
                but.appendChild(link);

                // donne des class
                section.className = "container-fluid";
                row.className = "row";
                card.className = "cadre col-xs-12 col-sm-12 col-md-12 col-lg-12"
                container.className = "bloc px-4 py-4 my-4";
                but.className = "infoBtn btn btn-info";
                link.className = "wiki";
            }

        } else {
            console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
        }   
    }
    
    // lance la recherche lorsqu'on presse sur Enter
    function enter(event) {
        x=event.keyCode;
        if (x == 13) {
            search();
        }
    }
    
    document.querySelector("button").addEventListener("click", search);
    document.querySelector("input").addEventListener("keydown", enter);
}