let flag = true;
function nameValidation() {
  let empName = document.getElementById("name_").value;
  let name_warning=document.getElementById('name_warning')
  if (!/^[a-zA-Z\s]+$/.test(empName) || empName.trim() == "") {
    name_warning.style.display="block"
    return false
  } else {
    name_warning.style.display="none"
    return true
  }
}
function numberValidation() {
  let number = document.getElementById("number_").value;
  let number_warning=document.getElementById('phone_warning')
  if (!/^[1-9]{1}[0-9]{9}$/.test(number)) {
    number_warning.style.display="block"
    return false
  } else {
    number_warning.style.display="none"
    return true
  }
}
function emailValidation() {
  let email = document.getElementById("email_").value;
  let email_warning=document.getElementById('email_warning')

  if (
    !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)

  ) {
    email_warning.style.display="block"
    return false
  } else {
    email_warning.style.display="none"
    return true 
  }
}
function selectValidation() {
  let select = document.getElementById("select_").value;
  let option_warning=document.getElementById('option_warning')

  if (select == "") {
    option_warning.style.display="block"
    return false
  } else {
    option_warning.style.display="none"
    return true
  }
}

function messageValidation(){
    let message=document.getElementById('message_').value
    let message_warning=document.getElementById('message_warning')

    if (message.trim() == "") {
      message_warning.style.display="block"
      return false;
    } else {
      message_warning.style.display="none"
      return true;
    }
}