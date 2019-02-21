window.onload=function(){
    
    function search() {

        const req = new XMLHttpRequest();
        let userInput = document.querySelector("input").value;
        req.open('GET', 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + userInput, false);
        req.send();

        if (req.status === 200) {
            console.log(req)
            let data = JSON.parse(req.response)
            let row = document.createElement("div");
            let section=document.getElementsByTagName("section")[0]
            let container = [];
            console.log(data)

            for (let i in data[1]) {

                // crée les éléments html à partir de js
                let title = document.createElement("h3");
                let descr = document.createElement("p");
                let link = document.createElement("a");
                container[i] = document.createElement("div");

                // ajoute le contenu de l'API dans les emplacements html créés
                // contenu dispaché en tableaux [][]
                title.textContent = data[1][i];
                descr.textContent = data[2][i];
                link.href = data[3][i];
                link.textContent = "wiki link"

                // dispose un ordre d'affichage des éléments et les affiche
                section.appendChild(row);
                row.appendChild(container[i]);
                container[i].appendChild(title);
                container[i].appendChild(descr);
                container[i].appendChild(link);

                // donne des class
                section.className = "container";
                row.className="row";
                container[i].className="bloc mx-1 mb-2 col-xs-12 col-sm-6 col-md-4 col-lg-3";
            }

        } else {
            console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
        }
    }
    document.querySelector("button").addEventListener("click", search);
}