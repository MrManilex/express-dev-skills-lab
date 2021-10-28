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

function newSkill(req, res){
  res.render('skills/new')
}

function create(req, res){
  skillsDb.create(req.body, function(error, skill) {
    res.redirect('skills')
  })
}

export{
  index,
  show,
  newSkill as new,
  create
}