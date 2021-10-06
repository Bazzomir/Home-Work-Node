var express = require('express');
var router = express.Router();
const controller = require('../controllers/employees');

/**
 * MVC: Model View Controller
 */

router.get('/', controller.getAll)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getUpdate)
      .get('/delete/:id', controller.getDelete)
      .post('/', controller.postCreate)
      .post('/:id', controller.postUpdate)
      .post('/delete/:id',controller.postDelete)

module.exports = router;
