  function validateEmailWithRegex(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    return !!email && typeof email === "string" && email.match(emailRegex);
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
  
    // input sanitization
    email = email.trim();
    email = escapeHtml(email);
  
    let validEmail = validateEmailWithRegex(email);
    if(validEmail == false){
        document.getElementById('emailInvalid').className = "text-danger visible"
    }else{
        document.getElementById('emailInvalid').className = "invisible"
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
    }
    else{
        document.getElementById("nameInvalid").className = "invisible"
    }
  }