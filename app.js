document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    let mnozstvo = parseInt(document.getElementById("množstvo").value);
    let typ = document.getElementById("typ").value;
    let id;
    switch(typ){
        case "B737": id = "B737counter"; break;
        case "A320": id = "A320counter"; break;
        case "B747": id = "B747counter"; break;
        case "A380": id = "A380counter"; break;
    }
    let counter = document.getElementById(id);
    let aktpocet = parseInt(counter.innerHTML);
    aktpocet += mnozstvo;

    counter.innerHTML = aktpocet;
})
