function validate(){
    let name = document.getElementById("username").value;
    if ( name == "") {
        document.getElementById("username").style.border= '2px solid red';
        document.getElementById("name-warning").style.visibility= "visible";
        document.getElementById("name-warning").innerHTML= "Cant be null";
      }

      let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("email").style.border= '2px solid red';
        document.getElementById("email-warning").style.visibility= "visible";
        document.getElementById("email-warning").innerHTML= "Cant be null";
      }

      let phone = document.getElementById("phone").value;
      if (phone  == "") {
          document.getElementById("phone").style.border= '2px solid red';
          document.getElementById("phone-warning").style.visibility= "visible";
          document.getElementById("phone-warning").innerHTML= "Cant be null";
        }
        
        let select = document.getElementById("select").value;
        if (select.value === 0){
            document.getElementById("select").style.border= '2px solid red';
            document.getElementById("select-warning").style.visibility= "visible";
            document.getElementById("select-warning").innerHTML= "Choose a option";
          }
          

          let message=document.getElementById('message').value
          if (message == "") {
            document.getElementById("message").style.border= '2px solid red';
            document.getElementById("message-warning").style.visibility= "visible";
            document.getElementById("message-warning").innerHTML= "Cant be null";
          }
    }





function validphone()
{
  document.getElementById("phone").setAttribute('type','Number');
  let phone=document.getElementById("phone");
  if(/^\(?([1-9]{1})\)?[-. ]?([0-9]{9})$/.test(phone.value)){
      phone.style.border= '2px solid green';
      document.getElementById("phone-warning").style.visibility='hidden';
      document.getElementById("phone").setAttribute('type','text');

  }
  else{
      phone.style.border= '2px solid red';
      document.getElementById("phone-warning").style.visibility='visible';
      document.getElementById("name-warning").innerHTML= "Enter valid phone";
  }
}

function validEmail()
{
  let email=document.getElementById("email");

  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
      email.style.border= '2px solid green';
      document.getElementById("email-warning").style.visibility='hidden';
  }
  else 
  {
      email.style.border= '2px solid red';
      document.getElementById("email-warning").style.visibility='visible';
      document.getElementById("name-warning").innerHTML= "Enter valid email";
  }
}

function validName()
{
  let name = document.getElementById("username");

  if (/^[A-Za-z]+$/.test(name.value) && name.value.trim() != "") {
      name.style.border= '2px solid green';
      document.getElementById("name-warning").style.visibility='hidden';

  
  }
  else 
  {
      name.style.border= '2px solid red';
      document.getElementById("name-warning").style.visibility='visible';
      document.getElementById("name-warning").innerHTML= "Enter valid name";
  }

}
function subjectValidate()
{
  let subject=document.getElementById("select");

  if(subject.value>1)
  {
      subject.style.border= '2px solid green';
      document.getElementById("select-warning").style.visibility='hidden';

  }
  else{
      subject.style.border= '2px solid red';
      document.getElementById("select-warning").style.visibility='visible';
  }
 
}

function messageValidate(){
  let message=document.getElementById('message').value
  if (message !== "") {
    document.getElementById("message").style.border= '2px solid green';
    document.getElementById("message-warning").style.visibility= "hidden";
  }
}

var open = false;
function showcart(){
  

    if(open)

    {
        document.getElementById('cartitem').style.display='none';
        open=false;
    }

    else
    {
        document.getElementById('cartitem').style.display='block';
        open=true;
    }
}

function openNav() {
  document.getElementById("mySidenav").style.display = "block";
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.display = "hidden";
  console.log("enter");
}

function searchfocus(){
  var searchmenu = document.getElementById('onsearch');
  searchmenu.style.display = 'block';    
}

function focusout(){
  var searchmenu = document.getElementById('onsearch');
  searchmenu.style.display = 'none';    
}
