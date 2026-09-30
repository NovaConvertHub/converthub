const anime = {
    title: "One Piece",
    episode: 915,
    status: "Watching"
};

document.getElementById("anime-title").textContent = anime.title;

document.getElementById("anime-episode").textContent =
    "Episode " + anime.episode;
document.getElementById("anime-status").textContent = anime.status;