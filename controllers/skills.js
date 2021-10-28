import * as skillsDb from '../data/dev-skills-db.js'

function index(req, res){
  skillsDb.find({}, function(err, skills){
    res.render('skills/index', {
      skills,
      err
    })
  })
}

function show(req, res) {
  skillsDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill,
      error
    })
  })
}

export{
  index,
  show
}