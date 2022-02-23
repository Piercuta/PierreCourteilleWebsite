function submitToAPI() {
//       var URL = "API Gateway";


  var name = document.getElementById("contact-ph-1").value;
  var email = document.getElementById("contact-ph-2").value;
  var subject = document.getElementById("contact-ph-3").value;
  var message = document.getElementById("contact-ph-4").value;
  if (name=="" || subject=="" || email=="" || message=="")
    {
        alert("Please Fill All Required Field");
        return false;
    }

  nameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1}[A-Z]{1}[a-z]{2,20}/;
  if(!nameRE.test(name)) {
  alert("Name entered, is not valid");
    return false;
  }

  emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!emailRE.test(email)) {
  alert("Email Address entered, is not valid");
    return false;
  }
    var data = {
      name : name,
      subject : subject,
      email : email,
      message : message
    };

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "https://dkkhd6im9j.execute-api.eu-west-1.amazonaws.com/prod/email");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
  xmlhttp.setRequestHeader("Access-Control-Allow-Credentials", "true");
  xmlhttp.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  xmlhttp.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  xmlhttp.send(JSON.stringify(data));
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      var response = JSON.parse(xmlhttp.responseText);
      if (xmlhttp.status === 200 ) {
        console.log('successful...');
      } 
      else {
          console.log('failed...');
      }
    }
  }

} 