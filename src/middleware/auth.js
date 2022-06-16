const jwt = require("jsonwebtoken");


const authenticate = function(req, res, next) {
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
      //If no token is present in the request header return error
     //check the token in request header
     //validate this token
     
    if (!token) return res.status(400).send({ status: false, msg: "token must be present" });
  
    console.log(token);

    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken) {
      return res.status(400).send({ status: false, msg: "token is invalid" });
    }
  

    next()

}

catch(err){
  res.status(500).send({error:err.message,msg:"BAD REQUEST"})
}
}


 const authorise = function(req, res, next) {
  try{
  
     let token = req.headers["x-auth-token"]
    if(!token) token= req.headers["x-Auth-token"]
    let decodedToken = jwt.verify(token, "functionup-radon");
     
    if (!decodedToken)
    {return res.status(400).send({ status: false, msg: "token is invalid" });}
  
    // authorization => Only allowed modification in logged user data
     
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if(userToBeModified != userLoggedIn) return res.status(401).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    
     next()
 
}
catch(err){
  res.status(500).send({error:err.message,msg:"BAD REQUEST"})
}
 }
module.exports.authenticate = authenticate
module.exports.authorise = authorise