function succes_msg() {
  $('#succes-sent').hide();
}

function submitToAPI() {



  var name = document.getElementById("contact-ph-1").value;
  var email = document.getElementById("contact-ph-2").value;
  var subject = document.getElementById("contact-ph-3").value;
  var message = document.getElementById("contact-ph-4").value;
  if (name=="" || subject=="" || email=="" || message=="")
    {
        alert($("#require-fields").text());
        return false;
    }

  // nameRE = /^[A-Z]{1}[a-z]{2,20}[ ]{1}[A-Z]{1}[a-z]{2,20}/;
  // if(!nameRE.test(name)) {
  // alert("Name entered, is not valid");
  //   return false;
  // }

  emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!emailRE.test(email)) {
  alert($("#email-no-valid").text());
    return false;
  }
    var data = {
      name : name,
      subject : subject,
      email : email,
      message : message
    };


  $('#contact-button').hide();
  $('#wait-button').show();
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "{http_email}");
  xmlhttp.setRequestHeader("Content-Type", "application/json");
  xmlhttp.send(JSON.stringify(data));
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      var response = JSON.parse(xmlhttp.responseText);
      if (xmlhttp.status === 200 ) {
        console.log('mail sent successfully...');
        $('#contact-button').show();
        $('#wait-button').hide();
        $('#succes-sent').show();
        setTimeout(succes_msg, 3000);
      } 
      else {
          console.log('mail sent failed...');
          $('#fail-sent').show();
      }
    }
  }

} 