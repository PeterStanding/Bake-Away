'use strict'
//Login function
let success = [];

// Global item search variables
let itemSuccess = false;

// Function to be used to test other function in the code.js file
async function test(){
  let rep = await fetch('/input');
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
    window.alert('Successfull Login');
  } else {
    window.alert("Failed Attempt, Please Try Again")
  }
}

//Function to create a new record in the BakeAway Database
async function newRecord() {
  let user  = document.getElementById('newUser').value;
  let email  = document.getElementById('newEmail').value;
  let password  = document.getElementById('newPass').value;
  let retype = document.getElementById('renter').value;
  let record = {username: user, password: password, email: email, rentered: retype}
  let myJSON = JSON.stringify(record);
  if (record.rentered == record.password && record.password != "") {
    console.log(myJSON);
    await fetch('/insert', {
      method: 'POST',
      body: record
    });
    //insertRecord(user,password,email);
  } else {
    window.alert("Invalid Input, Passwords are Incorrect");
  }
}

async function searchItems() {
  let input = document.getElementById('myinput').value;
  let resp = await fetch("/searchItems")
  let itemsList = await resp.json();
  console.log(itemsList)
  console.log(input)
  itemsList.includes(input)? itemSuccess.push(true) : itemSuccess.push(false)
}

let basketList = []
async function addUp(id){
  // let resp = await fetch("/addBasket")
  // let basketList = await resp.json()

  if (basketList.includes(id)){
    basketList.splice(basketList.indexOf(id), 1);
    console.log("Delete from array")
  }else{
  basketList.push(id)
  console.log("Add to array")
}
  console.log(basketList)

  // for (let i of basketList){
  //       let bigL = document.getElementById("item")
  //       let li = document.createElement("li")
  //       li.appendChild(document.createTextNode("Four"))
  //       bigL.appendChild(li)
  //     }
};


// async function showBasket(){
//     console.log(basketList)
//     for (let i of basketList){
//       let bigL = document.getElementById("item")
//       console.log(bigL)
//       let li = document.createElement("li")
//       li.appendChild(document.createTextNode("Four"))
//       bigL.appendChild(li)
//     }
//   }
