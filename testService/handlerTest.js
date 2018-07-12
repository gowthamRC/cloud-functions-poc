'use strict';

function hello(params) {
  const name = params.name || 'World';
  return { payload: `Hello, ${name}!` };
}


function hello(params) {
    if(params.firstName != undefined && params.firstName != "" && params.lastName != undefined && params.lastName != "") {
        return {
            message: 'Hello '+params.firstName+' ' +params.lastName+ '! Deployed function from serverless framework222!',
            firstName: params.firstName,
            lastName: params.lastName
        };
    } if(params.firstName != undefined && params.firstName != "") {
        return {
            message: 'Hello '+params.firstName+ '! Deployed function from serverless framework2222!',
            firstName: params.firstName
        };
    } if(params.lastName != undefined && params.lastName != "") {
        return {
            message: 'Hello '+params.lastName+ '! Deployed function from serverless framework222!',
            lastName: params.lastName
        };
    } else {
        return {
        message: 'Hello User! Deployed function from serverless framework222!'
        };
    }
}

exports.hello = hello;