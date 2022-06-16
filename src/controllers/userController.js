const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req,res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = req.body;
  try{
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
  }
  catch(err){
    res.status(500).send({error:err.message,msg:"BAD REQUEST"})
  }
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;
try{
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });
  }

  catch(err){
    res.status(500).send({error:err.message,msg:"BAD REQUEST"})
  }
  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  
  let token = jwt.sign(
    {
     // userId: user._id.toString(),
      batch: "radon",
      organisation: "FUnctionUp",
    },
    "functionup-radon"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
}


const getUserData = async function (req, res) {
 
  let userId = req.params.userId;
  try{
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(403).send({ status: false, msg: "No such user exists" });
  

  res.status(202).send({ status: true, data: userDetails });
}
catch(err){
  res.status(500).send({error:err.message,msg:"BAD REQUEST"})
}
}
const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  try{
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send("No such user exists");
  }
}
  catch(err){ res.status(400).send({error:err.message,msg:"BAD REQUEST"})
  }

  let userData = req.body;
  try{
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.status(200).send({ status: updatedUser, data: updatedUser });
}
catch(error){ res.status(400).send({error:err.message,msg:"BAD REQUEST"})

}
}
const postMessage = async function (req, res) {
    let message = req.body.message
   
    //userId for which the request is made. In this case message to be posted.
   try{
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.status(400).send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.status(200).send({status: true, data: updatedUser})
}
catch(err){ res.status(400).send({error:err.message,msg:"BAD REQUEST"})
  }
}


const deleteUser = async function(req, res) {    
  let userId = req.params.userId
  try{
  let user = await userModel.findById(userId)
  if(!user) {
      return res.status(400).send({status: false, message: "no such user exists"})
  }
  let updatedUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
  res.status(200).send({status: true, data: updatedUser})
}
catch(err){ res.status(400).send({error:err.message,msg:"BAD REQUEST"})
  }
}


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser= deleteUser
