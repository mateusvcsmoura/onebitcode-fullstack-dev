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

        if (typeof (name) !== "string" || !Array.isArray(tags) && typeof (tags) !== "string") {
            return res.status(400).json({ message: "invalid playlist" });
        }

        const playlist = playlistsModel.createPlaylist(name, tags, songs);
        playlistsModel.savePlaylist(playlist);

        return res.status(200).json(playlist);
    },

    // PUT /playlists/:id
    update: (req, res) => {
        const { id } = req.params;
        const { name, tags } = req.body;

        if (name && typeof (name) !== "string" || tags && !Array.isArray(tags) && typeof (tags) !== "string") {
            return res.status(400).json({ message: "invalid playlist new arguments" });
        }

        const playlist = playlistsModel.updatePlaylist(id, name, tags);

        if (!playlist) {
            return res.status(404).json({ message: "playlist not found" });
        }

        return res.status(200).json(playlist);
    },

    // DELETE /playlists/:id
    delete: (req, res) => {
        const { id } = req.params;
        const playlists = playlistsModel.deletePlaylist(id);

        if (!playlists) {
            return res.status(404).json({ message: "playlist not found" });
        }

        return res.status(204).json(playlists);
    },

    // POST /playlists/playlist/:id/new-song
    createSong: (req, res) => {
        const { name, singer, year, album } = req.body;
        const { id } = req.params;

        if (!name || !singer || !year) {
            return res.status(400).json({ message: "invalid songs arguments" });
        }

        if (name && typeof (name) !== "string" || year && typeof (year) !== "number") {
            return res.status(400).json({ message: "invalid songs arguments" });
        }
        const newSong = playlistsModel.createSong(name, singer, year, album);
        const updatedPlaylist = playlistsModel.saveSongInPlaylist(id, newSong);

        if (!newSong || !updatedPlaylist) {
            return res.status(400).json({ message: "invalid songs/playlist arguments" });
        }

        return res.status(201).json(updatedPlaylist);
    },

    // DELETE /playlists/playlist/:id/delete-song/:songId
    deleteSong: (req, res) => {
        const { id, songId } = req.params;
        let playlist = playlistsModel.getPlaylistById(id);

        if (!playlist) {
            return res.status(404).json({ message: "playlist not found" });
        }

        playlist = playlistsModel.deleteSongFromPlaylist(playlist, songId);

        if (!playlist) {
            return res.status(400).json({ message: "invalid song arguments" });
        }

        return res.status(200).json(playlist);
    }
};

module.exports = playlistsController;