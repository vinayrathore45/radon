const funTrim = function(){
    const str = "   FunctionUp   "
    const trimmedStr = str.trim()
    console.log(trimmedStr)
}

const lowerCase = function(){
    const str1 = "I AM CHANGING THE TEXT TO LOWER CASE"
    const lowerStr = str1.toLowerCase()    
    console.log(lowerStr) 
}
const upperCase = function(){
    const str2 = "i want to change the text to upper case"
    const upperStr = str2.toUpperCase()
    console.log(upperStr)
}
 module.exports.trim = funTrim
 module.exports.lowerCase = lowerCase
 module.exports.upperCase = upperCase