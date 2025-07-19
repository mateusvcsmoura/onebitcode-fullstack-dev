const express = require('express');
const router = express.Router();

const playlistsController = require('./controllers/playlistsController');

router.get('/', (req, res) => {
    res.status(200).json({ message: "Ok" });
});

router.get('/playlists', playlistsController.index);
router.get('/playlists/:id', playlistsController.show);

router.post('/playlists', playlistsController.create);

router.put('/playlists/:id', playlistsController.update);

router.delete('/playlists/:id', playlistsController.delete);

module.exports = router;