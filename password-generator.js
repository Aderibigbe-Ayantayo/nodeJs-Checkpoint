const generatePassword = require('generate-password');

const password = generatePassword.generate({
    lenght: 10,
    numbers: true,
})

// console.log(password)