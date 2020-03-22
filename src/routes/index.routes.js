const {Router} = require('express');
const router = Router();

const {renderIndex, renderAbout } = require('../controller/index.contoller');

router.get('/', renderIndex)
router.get('/about',renderAbout)

module.exports = router;