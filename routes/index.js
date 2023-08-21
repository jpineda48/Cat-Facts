var express = require('express');
var router = express.Router();
const ROOT_URL = 'https://catfact.ninja'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cat Facts' });
});

/* GET home page. */
router.get('/cats/fact', function(req, res) {
  fetch(`${ROOT_URL}/fact`)
    // .then(res => res.json())
    .then(catFacts => {
      console.log(catFacts)
    
      //render data to view > index.ejs
      res.render('cat/fact', {fact: catFacts})
    })
});

router.get('/cats/fact', function(req,res){
  res.render('cat/fact')

})








/* GET home page. */
// router.get('/cats/facts', function(req, res, next) {
//   fetch('https://catfact.ninja/fact')
//     .then(catFacts => {
//       res.send(catFacts)
//       //render data to view > index.ejs
//       // res.render('cat/fact', { title: 'Cat Facts', catFacts });
//     })
//     .catch(err =>{
//       res.send(err)

//   })
// });


module.exports = router;


