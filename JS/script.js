const linksNavbar = document.querySelectorAll(".nav-link")
const netflixRows = document.querySelectorAll(".netflix-row")


for (const link of linksNavbar) {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        for (const l of linksNavbar) {
            l.classList.remove("active")
        }
        link.classList.add("active")
    })
}

//funzione che prende una traccia di films e la fa scorrere della distanza che le diciamo (500 destra, -500 sinistra)

function scrollTrack(track, distance) {
    track.scrollLeft += distance
}

/*funzione che "prepara" una riga. Quando le diamo una riga (row),
lei entra dentro, cerca la traccia dei film e i due pulsanti.
Poi mette un "sensore del click" sul pulsante destro (btnRight) e su quello sinistro (btnLeft).
Se l'utente clicca qui, attiva la funzione scrollTrack di prima e si muove di 500 (o -500) pixel.*/

function setupRowSliders(row) {
    const track = row.querySelector(".netflix-track")
    const btnLeft = row.querySelector(".btn-left")
    const btnRight = row.querySelector(".btn-right")

    btnRight.addEventListener("click", () => {
        scrollTrack(track, 500)
    });

    btnLeft.addEventListener("click", () => {
        scrollTrack(track, -500)
    });
}

/* Funzione che Prende la prima riga (Trending Now) e la passa alla funzione setupRowSliders per attivarle i pulsanti.
Passa alla seconda riga (Watch It Again) e fa la stessa cosa.
Passa alla terza riga (New Releases) e attiva anche quella.*/

for (const row of netflixRows) {
    setupRowSliders(row)
}
