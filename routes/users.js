var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/log_in', (req, res, next) => {
  res.render('log_in')
});

router.post('/log_in', (req, res) => {
  res.send(req.body)
})


router.get('/sign_up', (req, res) => {
  res.render('sign_up')
})

router.post('/sign_up', (req, res) => {
  res.send(req.body)
})



module.exports = router;
