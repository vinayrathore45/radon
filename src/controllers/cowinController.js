let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

    let getSessionsByDistrict= async function (req,res){
    try {
        let districtId = req.query.district_id
        let date = req.query.date
        console.log(`query params are: ${districtId} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }  
}

const getWheather= async function(req,res){
    try{
    let cities= ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
    let objArrayOfCity =[]
  for(i=0; i<cities.length;i++){
    let obj ={city:cities[i]}
    
    
    var options= {
        method:"get",
        url: ` http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c3a1ac8d1eba396f3fefa1f36c0c7d4c`

    }
    let result =await axios(options)
    console.log(result.data.main.temp)
    obj.temp = result.data.main.temp
    objArrayOfCity.push(obj)
  }
   let sorted =objArrayOfCity.sort(function(a,b){return a.temp - b.temp})
   console.log({data:sorted,status:true})
    res.status(200).send({msg: sorted})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}  
}




let createMeme= async function (req,res){
    try {
        let template = req.query.template_id
        let text1 = req.query.text0
        let text2 = req.query.text1
       let userName = req.query.username
        let password = req.query.password
        
        console.log(`query params are: ${template} ${text1} ${text2} ${userName} ${password}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template}&text0= ${text1}&text1= ${text2}&username= ${userName}&password= ${password}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }  
}

module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getSessionsByDistrict= getSessionsByDistrict
module.exports.getWheather = getWheather
module.exports.createMeme = createMeme