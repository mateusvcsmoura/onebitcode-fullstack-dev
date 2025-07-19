const express = require('express');
const router = express.Router();

const playlistsController = require('./controllers/playlistsController');

router.get('/', (req, res) => {
    res.status(200).json({ message: "Ok" });
});

router.get('/playlists', playlistsController.index);
router.get('/playlists/:id', playlistsController.show);

router.post('/playlists', playlistsController.create);
router.post('/playlists/playlist/:id/new-song', playlistsController.createSong);

router.put('/playlists/:id', playlistsController.update);

router.delete('/playlists/:id', playlistsController.delete);
router.delete('/playlists/playlist/:id/delete-song/:songId', playlistsController.deleteSong);

module.exports = router;