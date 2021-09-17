const express = require('express');
const router = express.Router();
const database = require('../models/database')
const {obj_filter_out_falsy} = require("../middlewares/helpers");



router.get('/log_in', (req, res, next) => {
  res.render('log_in')
});

router.post('/log_in', (req, res) => {
  res.send(req.body)
})



router.get('/sign_up', (req, res) => {
  res.render('sign_up')
})

router.post('/sign_up', async (req, res) => {
  try {
    await database.add_employee(obj_filter_out_falsy(req.body))
    res.redirect('/')
  }
  catch (e) {
    res.render('error', {
      message: "Error occurred while trying to sign you up",
      error: e
    })
  }
})



module.exports = router;
