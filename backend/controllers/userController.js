let users = [
  { id: 1, name: "Reaksa" }
];

// GET /users
exports.getUsers = (req, res) => {
  res.json(users);
};

// POST /users
exports.createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };

  users.push(newUser);
  res.json(newUser);
};

//put /user
exports.updateUser = (req , res)=>{
  const userId = parseInt(req.params.id);
  const UserIndes = user.findIndex(u => u.id === userId);
  if(userIndex === -1){
    return res.status(404).json({message:"User not found"});
  }
  const updateUser = {
    userId,
    name:req.body.name || users[userIndex].name
  }
  users[userIndex] = updateUser;
  res.status(200).json(updateUser);
}

//Delete user

exports.deleteUser = (req , res)=>{
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === userId);
  if(userIndex === -1){
    return res.status(404).json({
      message:"User not found"
    })
  }
  users.splice(userIndex,1);
  res.status(200).json({
    message:"User deleted"
  });
}