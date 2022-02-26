  function validateEmailWithRegex(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return !email && typeof email === "string" && email.match(emailRegex);
  }
  
  function checkInputEmail(email) {
    let isValidEmail = validateEmail(email);
  
    if (isValidEmail) {
      document.getElementById("emailHelp").remove();
      alert("Valid email!");
    } else {
      document.getElementById("emailHelp").innerText = "Invalid email!";
    }
  }

  function validateName(fname, lname){

    if(null == fname || null == lname){
        return null;
    }

    if (""== fname || "" == lname){
        return false;
    }

    return true;
  }
  
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
  
  function validateInputs() {
    let email = document.getElementById("email").value;

    let forward = false
    // input sanitization
    email = email.trim();
    email = escapeHtml(email);
  
    let validEmail = validateEmailWithRegex(email);
    if(validEmail == false){
        document.getElementById('emailInvalid').className = "text-danger visible"
        forward = false
    }else{
        document.getElementById('emailInvalid').className = "invisible"
        forward = true
    }

    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    
    // input sanitization
    fname = fname.trim();
    fname = escapeHtml(fname);

    // input sanitization
    lname = lname.trim();
    lname = escapeHtml(lname);

    let validName = validateName(fname, lname);
    if (validName == false){
        document.getElementById("nameInvalid").className = "text-danger visible"
        forward = false
    }
    else{
        document.getElementById("nameInvalid").className = "invisible"
        forward = true
    }

    let pw = document.getElementById("password").value

    pw = pw.trim()
    pw = escapeHtml(pw)

    if(forward){
     //console.log("in submit form")
          var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == XMLHttpRequest.DONE) {
                    if("success" == xhttp.responseText){
                        window.location.href = "userLogin"
                    }else{
                        window.location.href = "userRegister"
                    }
                }
            }


            xhttp.open("POST", "/userRegister", true);
            var user = new FormData();
            user.append("email", email);
            user.append("password", pw);
            user.append("fname", fname);
            user.append("lname", lname);
            xhttp.send(user);
    }
  }