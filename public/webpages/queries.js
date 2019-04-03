'use strict'
//Login function
let success = [];

async function test(){
  console.log("Testing Functions")
}

async function loginRequest() {
  console.log("Test")
  let input = document.getElementById('myUsername').value;
  let resp = await fetch("/login")
  let userList = await resp.json();
  console.log(userList)
  console.log(input)
  userList.includes(input)? success.push(true) : success.push(false)
}

async function passwordRequest() {
  let password  = document.getElementById('myPass').value;
  let passResp = await fetch("/password")
  let passList = await passResp.json();
  console.log(passList)
  console.log(password)
  passList.includes(password)? success.push(true) : success.push(false)

  if (success[0] == success[1] && success[0] == true) {
    console.log("Signed In")
  } else {
    console.log("Failed Attempt")
  }
}
