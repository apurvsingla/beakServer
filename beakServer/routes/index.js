const express = require('express');
const router = express.Router();
const data = require('../controller/mode_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fan', data.fanController);
router.post('/lamp', data.lampController);
router.post('/piano', data.pianoController);

router.get('/fanData', data.fanDataController);
router.get('/lampData', data.lampDataController);
router.get('/pianoData', data.pianoDataController);

// router.get('/data', sanbox.show);
// router.delete('/delete/:id', sanbox.delete);

module.exports = router;
