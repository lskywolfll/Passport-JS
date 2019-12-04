const jwt = require('jsonwebtoken');

const [, , option, secret, nameOrToken] = process.argv;

if (!option || !secret || !nameOrToken){
    return console.error('Missing arguments');
}

function signToken(datos, secret) {
    return jwt.sign(datos, secret);
}

function verifyToken(token ,secret){
    return jwt.verify(token, secret);
}

if(option == 'sign'){
    console.log(signToken({ sub: nameOrToken }, secret))
}else if(option == "verify"){
    console.log(verifyToken(nameOrToken, secret));
}else{
    console.log('Option needs to be "sign" or "verify"');
}