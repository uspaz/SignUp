function confirmation(confirm){
  const inputs = document.querySelectorAll("input");

  if(confirm){
    Swal.fire({
      icon: 'success',
      text: 'You are registered!',
    })

    for (const el of inputs) { el.value = ""; }
  
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Do you need to complete all entries!',
    })
  }
}
function valid(){
  
  const name = document.getElementById("name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  
  if(email.value.trim() == ""){
    setErrorFor(email, 'Email is required');

  }else if (!isEmail(email.value.trim())) {
    setErrorFor(email, 'Looks like this is not an email');

  }else{
    setSuccessFor(email);
  }

  name.value.trim() == "" ? 
  setErrorFor(name, 'First Name cannot be empty') 
  : 
  setSuccessFor(name);

  lastName.value.trim() == "" ? 
  setErrorFor(lastName, 'Last Name cannot be empty') 
  : 
  setSuccessFor(lastName);

  password.value.trim() == "" ?
  setErrorFor(password, 'Password cannot be empty')
  : 
  setSuccessFor(password);

  return ((name.value.trim().length > 0) && (lastName.value.trim().length > 0) && (password.value.trim().length > 0));
}

const small = document.getElementsByClassName("message-error");

function setErrorFor(input, message) {
  input.classList.add('error');
  
  for (const el of small) {

    if(el.attributes.id.value == input.attributes.id.value){
      el.innerText = message;
      el.style = "display: block"
    }

  }
}

function setSuccessFor(input) {
  input.classList.remove('error');

  for (const el of small) {

    if(el.attributes.id.value == input.attributes.id.value){
      el.innerText = "";
      el.style = "display: none"
    }

  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.getElementById("btn").addEventListener("click", (e) =>{
  e.preventDefault()
  confirmation( valid() )
})