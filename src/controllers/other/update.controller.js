const db = require('../../database/models');

const updateController = async (req, res) => {
  try {
    const [updated] = await db.Movie.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedMovie = await db.Movie.findByPk(req.params.id);
      res.json(updatedMovie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateController;
