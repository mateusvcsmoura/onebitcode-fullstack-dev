const { nanoid } = require("nanoid");

let playlists = [
    { name: "Playlist Test", tags: ["pop", "indie", "alternative"], songs: [{ name: "Birds of a Feather", singer: "Billie Eilish", year: 2024, album: "Hit Me Hard and Soft", id: nanoid() }, { name: "Born With a Broken Heart", singer: "Olivia O'brien", year: 2024, album: "Single", id: nanoid() }], id: nanoid() }
];

const playlistsModel = {
    getAllPlaylists() {
        return playlists;
    },

    getPlaylistById(id) {
        const playlist = playlists.find(playlist => playlist.id === id);
        return playlist;
    },

    createPlaylist(playlistName, tags, songs = []) {
        if (!Array.isArray(tags)) {
            tags = tags.split(','); // "rap, pop, indie" -> ["rap", "pop", "indie"]
        }

        const newPlaylist = {
            name: playlistName,
            tags,
            songs,
            id: nanoid()
        };

        return newPlaylist;
    },

    savePlaylist(playlist) {
        if (playlist) {
            return playlists.push(playlist);
        }
    },

    // PUT /playlists/:id/
    updatePlaylist(playlistId, playlistName, playlistTags) {
        const playlist = this.getPlaylistById(playlistId);

        if (playlistName) {
            playlist.name = playlistName;
        }

        if (playlistTags) {
            if (!Array.isArray(playlistTags)) {
                playlistTags = playlistTags.split(",");
            }

            playlist.tags = playlistTags;
        }

        return playlist;
    },

    deletePlaylist(id) {
        const playlistIndex = playlists.findIndex(playlist => playlist.id === id);

        if (playlistIndex !== -1) {
            playlists.splice(playlistIndex, 1);
            return playlists;
        }

    },

    createSong(songName, singer, year, album = "Single") {
        const newSong = {
            name: songName,
            singer: singer.toString(),
            year,
            album,
            id: nanoid()
        }

        return newSong;
    },

    saveSongInPlaylist(playlistId, song) {
        const playlist = this.getPlaylistById(playlistId);
        playlist.songs.push(song);

        return playlist;
    }
};

module.exports = playlistsModel;
