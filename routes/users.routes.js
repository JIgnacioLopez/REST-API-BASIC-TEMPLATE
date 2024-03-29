// GET POST PUT DELETE users.routes

const {Router} = require('express');
const { getUser, postUser, putUser, deleteUser } = require('../controllers/users.controllers')

const router = Router();

router.get('/', getUser);
router.post('/', postUser);
router.put('/', putUser);
router.delete('/', deleteUser);


module.exports = router;