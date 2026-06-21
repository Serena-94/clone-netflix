const movies = {
    action: [
        { title: "Brawl in cell block 99", poster: "assets/movies/Action/azione1.jpg" },
        { title: "The Hobbit", poster: "assets/movies/Action/hobbit.jpg" },
        { title: "One Piece", poster: "assets/movies/Action/azione3.jpg" },
        { title: "Il Gladiatore II", poster: "assets/movies/Action/azione4.jpg" },
        { title: "L'eternauta", poster: "assets/movies/Action/azione5.jpg" },
        { title: "War Machine", poster: "assets/movies/Action/azione6.jpg" },
    ],
    comedy: [
        { title: "Una Notte Da Leoni 3", poster: "assets/movies/Comedy/commedia1.jpg" },
        { title: "Buen Camino", poster: "assets/movies/Comedy/commedia2.jpg" },
        { title: "Ghostbusters", poster: "assets/movies/Comedy/commedia3.jpg" },
        { title: "Io sono la fine del mondo", poster: "assets/movies/Comedy/commedia4.jpg" },
        { title: "Love Is In The Air", poster: "assets/movies/Comedy/commedia5.jpg" },
        { title: "Uno sposo e due spose", poster: "assets/movies/Comedy/commedia6.jpg" },
    ],
    drama: [
        { title: "Bohemian Rhapsody", poster: "assets/movies/Drama/dramma1.jpg" },
        { title: "My Demon", poster: "assets/movies/Drama/dramma2.jpg" },
        { title: "Caramelo", poster: "assets/movies/Drama/dramma3.jpg" },
        { title: "Estraneo a bordo", poster: "assets/movies/Drama/dramma4.jpg" },
        { title: "The last letter from you lover", poster: "assets/movies/Drama/dramma5.jpg" },
        { title: "La casa di papel, Berlin", poster: "assets/movies/Drama/dramma6.jpg" },
    ],
    fantasy: [
        { title: "Stranger Things", poster: "assets/movies/Fantasy/fantasy1.jpg" },
        { title: "Il signore degli anelli", poster: "assets/movies/Fantasy/fantasy2.jpg" },
        { title: "Jumanji", poster: "assets/movies/Fantasy/fantasy3.jpg" },
        { title: "Damsel", poster: "assets/movies/Fantasy/fantasy4.jpg" },
        { title: "Troll", poster: "assets/movies/Fantasy/fantasy5.jpg" },
        { title: "Il cacciatore di giganti", poster: "assets/movies/Fantasy/fantasy6.jpg" },
    ],
    romantic: [
        { title: "My Oxford Year", poster: "assets/movies/Romantic/romantic1.jpg" },
        { title: "Il Fabbricante di lacrime", poster: "assets/movies/Romantic/romantic2.jpg" },
        { title: "Love+Wine", poster: "assets/movies/Romantic/romantic3.jpg" },
        { title: "Safe Heaven", poster: "assets/movies/Romantic/romantic4.jpg" },
        { title: "Kiss", poster: "assets/movies/Romantic/romantic5.jpg" },
        { title: "Together", poster: "assets/movies/Romantic/romantic6.jpg" },
    ],
    thriller: [
        { title: "Apex", poster: "assets/movies/Thriller/thriller1.jpg" },
        { title: "Don't Move", poster: "assets/movies/Thriller/thriller2.jpg" },
        { title: "Intruso", poster: "assets/movies/Thriller/thriller3.jpg" },
        { title: "Hypnotic", poster: "assets/movies/Thriller/thriller4.jpg" },
        { title: "Prey", poster: "assets/movies/Thriller/thriller5.jpg" },
        { title: "La Mante", poster: "assets/movies/Thriller/thriller6.jpg" },
    ],
    kids: [
        { title: "Gioia mia", poster: "assets/movies/Bambini/bambini1.jpg" },
        { title: "Cattivissimo me 4", poster: "assets/movies/Bambini/bambini2.jpg" },
        { title: "Madagascar 4", poster: "assets/movies/Bambini/bambini3.jpg" },
        { title: "Baby Boss", poster: "assets/movies/Bambini/bambini4.jpg" },
        { title: "Willy Wonka", poster: "assets/movies/Bambini/bambini5.jpg" },
        { title: "Feel The Beat", poster: "assets/movies/Bambini/bambini6.jpg" },
    ]
    
};

//funzione a cui passiamo il genere, con selectedMovies avremo la lista dei films di quel genere

function showMoviesByGenre(genre) {
    const container = document.getElementById("genre-container")
    const selectedMovies = movies[genre]
//svuotiamo il contenitore prima di passare all'altro genere
    container.textContent = ''

// Per ogni film trovato nella lista, creo una nuova colonna e la relativa card, poi le aggiungo alla pagina.
    for (const movie of selectedMovies) {
        const col = document.createElement("div")
        col.className = "col-6 col-md-4 col-lg-2 mb-4 px-1"

        const card = document.createElement("div")
        card.className = "js-movie-card"

        const img = document.createElement("img")
        img.src = movie.poster;
        img.alt = movie.title;

        const title = document.createElement("p")
        title.className = "text-light mt-2"
        title.textContent = movie.title

        card.appendChild(img)
        card.appendChild(title)
        col.appendChild(card)
        container.appendChild(col)
        
    }
}

// Cerco tutti i link del menu che hanno la classe 'genre-link'
const genreLinks = document.querySelectorAll(".genre-link")

// Faccio un ciclo su tutti i link trovati per aggiungere l'ascoltatore
for (const link of genreLinks) {
    link.addEventListener('click', function(event) {
        // Impedisco al browser di scorrere verso l'alto (il comportamento del #)
        event.preventDefault(); 
        
        // Recupero il genere dall'attributo che ho messo nell'HTML
        const selectedGenre = this.getAttribute('data-genre');
        
        // Faccio partire la funzione 
        showMoviesByGenre(selectedGenre);
    });
}

// Recupero l'elemento che farà partire il reset
const resetTrigger = document.getElementById("reset-button")

// Aggiungo l'ascoltatore di eventi al bottone
resetTrigger.addEventListener("click", function(event) {
    event.preventDefault()
    document.getElementById("genre-container").textContent = ''
})