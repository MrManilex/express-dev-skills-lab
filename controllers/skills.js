import * as skillsDb from '../data/dev-skills-db.js'

function index(req, res){
  skillsDb.find({}, function(err, skills){
    res.render('skills/index', {
      skills,
      err
    })
  })
}

export{
  index,
}