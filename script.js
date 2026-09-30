const animeList = [
    {
        title: "One Piece",
        episode: 915,
        status: "Watching"
    },
    {
        title: "Naruto",
        episode: 500,
        status: "Completed"
    }
];

const animeContainer = document.getElementById("anime-list");
const searchInput = document.getElementById("search-input");

function displayAnime(animeArray) {
    animeContainer.innerHTML = "";

    animeArray.forEach(function(anime) {
        const card = document.createElement("div");

        card.className = "anime-card";

        card.innerHTML = `
            <h2>${anime.title}</h2>
            <p>Episode ${anime.episode}</p>
            <p>${anime.status}</p>
        `;

        animeContainer.appendChild(card);
    });
}

displayAnime(animeList);

searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    const filteredAnime = animeList.filter(function(anime) {
        return anime.title.toLowerCase().includes(searchText);
    });

    displayAnime(filteredAnime);
});