import * as skillsDb from '../data/dev-skills-db.js'

function index(req, res){
  skillsDb.find({}, function(err, skills){
    res.render('skills', {
      skills,
      err
    })
  })
}

export{
  index,
}