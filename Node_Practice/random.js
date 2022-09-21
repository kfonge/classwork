
//everything inside this file is a method of the module we created
// therefore, when calling the function defined below, command is random.random (module.method)
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}
    
module.exports = {
    random
}