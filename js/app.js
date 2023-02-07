function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var warning = document.getElementById("note");

  if (input.value.match(validRegex)) {

    alert("You will be notified!");

    document.form1.text1.focus();

    return true;

  } else {
    warning.style.display = "block";
    document.form1.text1.focus();

    return false;

  }

}


/*var emailInput = document.getElementById("email");
var submitBtn = document.getElementById("submitBtn");

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

emailInput.addEventListener("input", function() {
    if (isValidEmail(emailInput.value)) {
      submitBtn.disabled = false;
    } else {
      submitBtn.disabled = true;
    }
  });

  function checkFunction() {
    // Your code to check if function is carried out
    if (!functionCarriedOut) {
      document.getElementById("error").style.display = "block";
    }
  }

  document.getElementById("input").addEventListener("input", checkFunction);


*/

/*
emailInput.addEventListener("input", function() {
  if (isValidEmail(emailInput.value)) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (isValidEmail(emailInput.value)) {
    // Submit the email
    // ...
  } else {
    // Show an error message
    alert("Invalid email address");
  }
});

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}*/


/*
another angle for full set
<input type="text" id="emailInput">
<button id="notifyButton">Notify me</button>
<p id="errorMessage" style="display: none;">Wrong email input</p>

<script>
  document.getElementById("notifyButton").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput").value;
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(emailInput)) {
      document.getElementById("errorMessage").style.display = "block";
    } else {
      document.getElementById("errorMessage").style.display = "none";
    }
  });
</script>

*/
/* current one0000000
  document.getElementById("submitBtn").addEventListener("click", function() {
    var emailInput = document.getElementById("email");
    /*var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!emailRegex.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      document.getElementById("error").style.display = "block";
    } else {
      emailInput.style.borderColor = "initial";
      document.getElementById("error").style.display = "none";
    }
  });
*/

  /*
  Final
  <input type="text" id="emailInput">
<button id="notifyButton">Notify me</button>
<p id="errorMessage" style="display: none;">Please provide a valid email</p>

<script>
  document.getElementById("notifyButton").addEventListener("click", function() {
    var emailInput = document.getElementById("emailInput");
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.style.borderColor = "red";
      document.getElementById("errorMessage").style.display = "block";
    } else {
      emailInput.style.borderColor = "initial";
      document.getElementById("errorMessage").style.display = "none";
    }
  });
</script>

  */

/*
possible solutions
1) <script>  
function verifyPassword() {  
  var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } else {  
     alert("Password is correct");  
  }  
}  
</script>  
  
<body>  
<center>  
<h1 style="color:green">Javatpoint</h1>  
<h3> Verify valid password Example </h3>  
  
<form onsubmit ="return verifyPassword()">  
<!-- Enter Password -->  
<td> Enter Password </td>  
<input type = "password" id = "pswd" value = "">   
<span id = "message" style="color:red"> </span> <br><br>  
  
<!-- Click to verify valid password -->  
<input type = "submit" value = "Submit">  
  
<!-- Click to reset fields -->  
<button type = "reset" value = "Reset" >Reset</button>  
</form>  
</center>  
</body>  
</html> 

2)try this

function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    alert("Valid email address!");

    document.form1.text1.focus();

    return true;

  } else {

    alert("Invalid email address!");

    document.form1.text1.focus();

    return false;

  }

}

<body onload="document.form1.text1.focus()">

    <div class="mail">

      <h2>Input an email address</h2>

      <form name="form1" action="#">

        <ul>

          <li><input type="text" name="text1" /></li>

          <li>&nbsp;</li>

          <li class="validate">

            <input

              type="submit"

              name="validate"

              value="Validate"

              onclick="ValidateEmail(document.form1.text1)"

            />

          </li>

          <li>&nbsp;</li>

        </ul>

      </form>

    </div>

    <script src="email.js"></script>

  </body>

</html>

li {

  list-style-type: none;

  font-size: 16pt;

}

.mail {

  margin: auto;

  padding-top: 10px;

  padding-bottom: 10px;

  width: 400px;

  background: teal;

  border: 1px soild silver;

}

.mail h2 {

  margin-left: 38px;

  color: white;

}

input {

  font-size: 20pt;

}

input:focus,

textarea:focus {

  background-color: lightyellow;

}

input validate {

  font-size: 12pt;

}

.rq {

  color: #ff0000;

  font-size: 10pt;

}
*/