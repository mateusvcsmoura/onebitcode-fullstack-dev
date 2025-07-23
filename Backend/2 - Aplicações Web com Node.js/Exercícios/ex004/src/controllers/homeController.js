const homeController = {
    index: (req, res) => {
        res.status(200).json({ message: `Welcome, ${req.user?.username || 'Guest'}. Hope you are well.` });
    }
};

module.exports = homeController;    