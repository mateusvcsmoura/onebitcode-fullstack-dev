const playlistsModel = require("../models/playlistsModel");

const playlistsController = {
    // GET /playlists
    index: (req, res) => {
        return res.status(200).json(playlistsModel.getAllPlaylists());
    },

    // GET /playlists/:id
    show: (req, res) => {
        const { id } = req.params;
        const playlist = playlistsModel.getPlaylistById(id);

        if (!playlist) {
            return res.status(404).json({ message: "playlist not found" });
        }

        return res.status(200).json(playlist);
    },

    // POST /playlists
    create: (req, res) => {
        let { name, tags, songs } = req.body;

        if (typeof (name) !== "string" || !tags) {
            return res.status(400).json({ message: "invalid playlist" });
        }

        if (!Array.isArray(tags)) {
            tags = tags.split(','); // "rap, pop, indie" -> ["rap", "pop", "indie"]
        }

        const playlist = playlistsModel.createPlaylist(name, tags, songs);
        playlistsModel.savePlaylist(playlist);

        return res.status(200).json(playlist);
    }
};

module.exports = playlistsController;