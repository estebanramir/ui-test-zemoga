var express = require('express');
var router = express.Router();

const USERTYPES = {
  ADMIN: 'Admin',
  USER: 'User'}

const users = [
  {name: 'A', password: '123', type: USERTYPES.ADMIN}, 
  {name: 'B', password: '123', type: USERTYPES.USER }];
router.get('/', function(req, res, next) {
  const {name, password} = req.body;
  const user = users.find(u => u.name === name);
  if (user && (user.password === password)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401,'Wrong User or password')
  }

});

router.get('/all', function(req, res, next) {
    res.json(users);
});

router.post('/', function(req, res, next) {
  const {name, password, type} = req.body;
  const user = users.find(u => u.name === name)
  if (user) {
    res.json(name)
  } else {
    users.push({name, password, type})
    res.sendStatus(201)
  }
});

module.exports = router;
