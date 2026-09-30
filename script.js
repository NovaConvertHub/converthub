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

animeList.forEach(function(anime) {
    const card = document.createElement("div");

    card.className = "anime-card";

    card.innerHTML = `
        <h2>${anime.title}</h2>
        <p>Episode ${anime.episode}</p>
        <p>${anime.status}</p>
    `;

    animeContainer.appendChild(card);
});