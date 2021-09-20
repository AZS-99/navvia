const express = require('express');
const router = express.Router();
const database = require('../models/database')
const {obj_filter_out_falsy, obj_toLowerCase} = require("../middlewares/helpers");



router.post('/delete/:id', async (req, res) => {
  try{
    await database.delete_employee(req.params.id)
    res.redirect('/employees/grid')
  } catch (e) {
    res.render('error', {
      message: 'Error while trying to delete employee with id ' + req.params.id,
      error: e
    })
  }
})


router.post('/email_exists', async (req, res) => {
  try {
    const [count_obj] = await database.count_employees('email', req.body.email)

    res.send( {exists: count_obj.count > 0})

  } catch (e) {

  }
})


router.get('/get/:id', async (req, res) => {
  try {
    res.send(await database.get_employee({id: req.params.id}))
  } catch (e) {
    res.render('error', {
      message: 'Error while trying to get employee with id ' + req.params.id,
      error: e
    })
  }
})


router.get('/grid', async (req, res) => {
  try {
    let employees = await database.get_employees()
    for (let employee of employees) {
      ['createdAt', 'updatedAt'].forEach(key => delete employee[key])
      employee = obj_filter_out_falsy(employee)
    }

    res.render('grid', {
      employees: employees
    })
  } catch (e) {

  }
})



router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', async (req, res) => {
  try {
    await database.add_employee(obj_filter_out_falsy(req.body))
    res.redirect('/employees/grid')
  }
  catch (e) {
    res.render('error', {
      message: "Error occurred while trying to sign you up",
      error: e
    })
  }
})


router.post('/update', async (req, res) => {
  try {
    let data = req.body
    obj_toLowerCase(data)
    await database.update_employee(data)
    res.redirect('/employees/grid')
  } catch (e) {
    res.render('error', {
      error: e
    })
  }
})


router.post('/update_form', async (req, res) => {
  try {
    res.render('update', {
      employee: await database.get_employee({id: req.body.id})
    })
  } catch (e) {
    res.render('error', {
      error: e
    })
  }
})



module.exports = router;
