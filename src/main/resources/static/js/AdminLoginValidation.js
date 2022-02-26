function validateEmailWithRegex(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return !!email && typeof email === "string" && email.match(emailRegex);
  }

function escapeHtml(unsafe) {
   return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
function validatePassword(pw){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    return strongRegex.test(pw);
}

  function validateInputs() {
    let forward = false;

    let email = document.getElementById("email").value;
  
    // input sanitization
    email = email.trim();
    email = escapeHtml(email);
  
    let validEmail = validateEmailWithRegex(email);
    if(validEmail == false){
        document.getElementById('emailInvalid').className = "text-danger visible"
        forward = false;
    }else{
        document.getElementById('emailInvalid').className = "invisible"
        forward = true
    }

    let pw =document.getElementById("password").value;

    // input sanitization
    pw = pw.trim();
    pw = escapeHtml(pw);

    let validPW = validatePassword(pw);
    if(validPW){
        document.getElementById("pwInvalid").className = "invisible"
        forward = true;
    }else{
        document.getElementById('pwInvalid').className = "text-danger visible"
        forward=false;
    }
    if(forward){
       window.location.href = '/adminHome';
    }
  }