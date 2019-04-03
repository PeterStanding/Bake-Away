'use strict'
//Login function
let success = [];

async function test(){
  console.log("Testing Functions")
}

//Function to Handle the login request for the login section within the system
async function loginRequest() {
  let input = document.getElementById('myUsername').value;
  let resp = await fetch("/login")
  let userList = await resp.json();
  console.log(userList)
  console.log(input)
  userList.includes(input)? success.push(true) : success.push(false)
}

//Function to Handle the login request for the password section within the system
async function passwordRequest() {
  let password  = document.getElementById('myPass').value;
  let passResp = await fetch("/password")
  let passList = await passResp.json();
  console.log(passList)
  console.log(password)
  passList.includes(password)? success.push(true) : success.push(false)

  if (success[0] == success[1] && success[0] == true) {
    window.alert('Success Full Login');
  } else {
    window.confirm("Failed Attempt, Please Try Again")
  }
}

//Function to create a new record in the BakeAway Database
async function newRecord() {
  let user  = document.getElementById('newUser').value;
  let email  = document.getElementById('newEmail').value;
  let password  = document.getElementById('newPass').value;
  let retype = document.getElementById('renter').value;

  if (retype == password) {
    console.log(user, password);
  } else {
    console.log("Invalid Input, Passwords are Incorrect");
  }
}
