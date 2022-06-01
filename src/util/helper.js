const printDate = function(){
    console.log("Date" +": 31")
}
 
 const printMonth = function(){
     console.log("Month"+ ": June")
 } 
  
 const getBatchInfo = function(){
     console.log("Radon"+", W3D1"+", the topic for today is Nodejs system")
 }

module.exports.date = printDate
module.exports.month = printMonth
module.exports.information = getBatchInfo