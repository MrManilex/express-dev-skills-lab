const skills = [
  {text: 'HTML', _id: 125223},
  {text: 'CSS', _id: 127904},
  {text: 'Javascript', _id: 139608},
  {text: 'Node.js', _id: 121658},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const todo = todos.find(todo => todo._id === parseInt(id))
    if (!todo) throw new Error ('No todo was found')
    return callback(null, todo)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export { 
	find,
  findById
}