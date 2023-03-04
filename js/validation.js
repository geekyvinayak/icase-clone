function validate(){
    let name = document.getElementById("username").value;
    if (/^[a-zA-Z\s]+$/.test(name) || name.trim() == "" && name != "") {
        document.getElementById("username").style.border= '2px solid green';
        document.getElementById("name-warning").style.visibility= "hidden";
      }
      else {
        document.getElementById("username").style.border= '2px solid red';
        document.getElementById("name-warning").style.visibility= "visible";
      }

      let email = document.getElementById("email").value;
    if (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)) {
        document.getElementById("email").style.border= '2px solid green';
        document.getElementById("email-warning").style.visibility= "hidden";
      }
      else {
        document.getElementById("email").style.border= '2px solid red';
        document.getElementById("email-warning").style.visibility= "visible";
      }

      let phone = document.getElementById("phone").value;
      if (/^[1-9]{1}[0-9]{9}$/.test(phone)) {
          document.getElementById("phone").style.border= '2px solid green';
          document.getElementById("phone-warning").style.visibility= "hidden";
        }
        else {
          document.getElementById("phone").style.border= '2px solid red';
          document.getElementById("phone-warning").style.visibility= "visible";
        }

        let select = document.getElementById("select").value;
        if (select != ""){
            document.getElementById("select").style.border= '2px solid green';
            document.getElementById("select-warning").style.visibility= "hidden";
          }
        else {
            
            document.getElementById("select-warning").style.visibility= "visible";
          }

          let message=document.getElementById('message').value
          if (message !== "") {
            document.getElementById("message").style.border= '2px solid green';
            document.getElementById("message-warning").style.visibility= "hidden";
          }
          else {
            document.getElementById("message").style.border= '2px solid red';
            document.getElementById("message-warning").style.visibility= "visible";
          }
    }
