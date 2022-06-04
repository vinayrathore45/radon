const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const movies = require('../movies/moviesIndex.js')
const router = express.Router();
const lodash = require('lodash'); 

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/Hello', function (req, res){
    
    console.log(lodash.chunk(['January','February','March','April','May','June','July','August','September','October','November','December'],4))
    console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]))
    console.log(lodash.union([2],[1,2],[2,3,4],[1,3,2,5],[4,5,6,7]))
    console.log(lodash.fromPairs([['a', 1],['b',2],['c',3]]))
    res.send('Done')
 });

router.get('/movies', function (req, res){
    res.send(movies.moviesIndex())

});
router.get('/movies/:indexNumber', function (req, res){
    let movies = ['Dark', 'The Expendables', 'Escape Plan', 'Fast and Furious']
    let a = req.params.indexNumber
    if(a<movies.length){
    console.log('The movie is ' + movies[a])
    res.send(movies[a])}
    else{
        res.send("use a valid index")
    }
})

router.get('/films', function (req, res){
    let films= [{
        "id": 1,
        "name": "Dark"},
        { "id":2,
        "name": "The Expendables"},
        { "id": 3,
           "name":"Escape Plan"},
        { "id": 4,
          "name":"Fast and Furious"}   
     
        ]
        console.log(films)
        res.send(films)
})

router.get('/films/:filmId', function (req, res){
    let films= [{
        "id": 1,
        "name": "Dark"},
        { "id":2,
        "name": "The Expendables"},
        { "id": 3,
           "name":"Escape Plan"},
        { "id": 4,
          "name":"Fast and Furious"}   
     
        ]
    let a= req.params.filmId
    for(let i=0; i<films.length; i++)
    if(a==films[i].id){
        console.log("The film is"+ films[i])
        res.send("The film is"+ films[i])
    }
    else{
        console.log("No film exists with this id")
        res.send("No film exists with this id")
    }
   
})


   

   



router.get('/sol1', function (req, res){
    let arr = [1,2,3,5,6,7]
    let sum = 0
    for(var i in arr ){
        sum+= arr[i]
    }
    let lastDigit = arr.pop()
    let consecutiveSum = lastDigit * (lastDigit+1)/2
    let missingNumber = consecutiveSum - sum
    res.send({data: missingNumber})
})

router.get('/sol2', function (req, res){
    let arr = [33,34,35,37,38]
    let len = arr.length
    let sum = 0
    for(var i in arr ){
        sum+= arr[i]
    }
    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let consecutiveSum = (len + 1) * (firstDigit + lastDigit)/2
    let missingNumber = consecutiveSum - sum
    res.send({data: missingNumber})
})
let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   

    router.post('/players', function (req, res) {
        
        let newPlayer = req.body
        let newPlayersName = newPlayer.name
        let isNameRepeated = false
    
    
        for(let i = 0; i < players.length; i++) {
            if(players[i].name == newPlayersName) {
                isNameRepeated = true;
                break;
            }
        }
    
        
        if (isNameRepeated) {
            res.send("This player was already added!")
        } else {
    
            players.push(newPlayer)
            res.send( {data: players, status: true})
        }
    });
    
    
    
       

  




router.get('/hello', function (req, res) {
   
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason