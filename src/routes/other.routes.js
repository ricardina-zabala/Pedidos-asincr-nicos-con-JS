const router = require('express').Router();
const { home, form, update } = require('../controllers/other')

router.get('/', home);
router.get('/:id', form);
router.put('/update/:id', update);

module.exports = router