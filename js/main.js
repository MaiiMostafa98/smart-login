
var usersData = [];
var oneUser = {};
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



function addUserData()
{

  if((document.getElementById("uName").value == "" ) || (document.getElementById("uEmail").value == "") || (document.getElementById("uPass").value == ""))
  {
     document.getElementById("req").innerHTML = "All Inputs is Required";
  }
  else if(!emailRegex.test(document.getElementById("uEmail").value))
  {
    document.getElementById("req").innerHTML = "Enter valid email";
  }
  else
  {
      document.getElementById("req").innerHTML = "Success";

      var oneUser = {
        userName:document.getElementById("uName").value,
        userEmail:document.getElementById("uEmail").value,
        userPass:document.getElementById("uPass").value,
      }
    
    
     usersData.push(oneUser);

     localStorage.setItem("ourlocalstorage" , JSON.stringify(usersData))
     
     claer()

  }

 console.log(usersData)

}



function claer()
{
    document.getElementById("uName").value=null;
    document.getElementById("uEmail").value=null;
    document.getElementById("uPass").value=null;
}

console.log(usersData)

//=================================================== login ================================================

function checkUser()
{
  if((document.getElementById("logUserEmail").value == "") || (document.getElementById("logUserPass").value == ""))
  {
     document.getElementById("logreq").innerHTML = "All Inputs is Required";
  }
  else if(!emailRegex.test(document.getElementById("logUserEmail").value))
  {
    document.getElementById("logreq").innerHTML = "Enter valid email";
  }
 

  claer()

}