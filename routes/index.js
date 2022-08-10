var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Morning Bartholomew",
    user: "PhiladelphiaGarlicAndHerbs",
    added: new Date(),
  },
  {
    text: "Morning, Lovely weather isn't it?",
    user: "Bartholomew",
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.username, added: new Date()});
  res.redirect('/');
});

module.exports = router;
