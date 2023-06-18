//function to toggle in hamburger icon to open
function openNav(){
  var sidebarNav = document.getElementById('toggleNav');
  document.getElementById('hamburgerIcon').style.visibility = 'collapse';
  document.getElementById('closeIcon').style.visibility = 'visible';
  sidebarNav.classList.toggle('active');
}
// function to toggle in cross icon to close
function closeNav(){
  var sidebarNav = document.getElementById('toggleNav');
  document.getElementById('hamburgerIcon').style.visibility = 'visible';
  document.getElementById('closeIcon').style.visibility = 'collapse';
  sidebarNav.classList.remove('active');
}


  //.......................................................................................................................


document.querySelector('#signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form inputs
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const cpassword = document.getElementById('cpassword');
    const dob = document.getElementById('dob');
    const bio = document.getElementById('bio');
  
    // Validate form inputs
    if (!validateRequired(fname)) {
      return;
    }
    if (!validateRequired(lname)) {
      return;
    }
    if (!validateRequired(username)) {
      return;
    }
    if (!validateRequired(email) || !validateEmail(email.value)) {
      return;
    }
    if (!validateRequired(password) || !validatePassword(password.value)) {
      return;
    }
    if (!validateRequired(cpassword) || !validateConfirmPassword(password.value, cpassword.value)) {
      return;
    }
    if (!validateRequired(dob)) {
      return;
    }
    if (!validateGender()) {
      return;
    }
    if (!validateRequired(bio)) {
      return;
    }
  
    // Create loginData object
    let loginData = {
      fname: fname.value,
      lname: lname.value,
      username: username.value,
      email: email.value,
      password: password.value,
      cpassword: cpassword.value,
      dob: dob.value,
      gender: getSelectedGender(),
      bio: bio.value
    };
  
   
    localStorage.setItem('loginData', JSON.stringify(loginData));
    alert("Registration sucessful!!");
  
    document.getElementById('signupForm').reset();
  });
  

  // Function to validate required fields
  function validateRequired(field) {
    if (field.value.trim() === '') {
      field.classList.add('error');
      field.nextElementSibling.innerText = 'This field is required.';
      return false;
    } else {
      field.classList.remove('error');
      field.nextElementSibling.innerText = '';
      return true;
    }
  }
  
  // Function to validate email format
  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(emailRegex)) {
      return true;
    } else {
      const emailField = document.getElementById('email');
      emailField.classList.add('error');
      emailField.nextElementSibling.innerText = 'Invalid email format.';
      return false;
    }
  }
  
  // Function to validate password
  function validatePassword(password) {
    if (password.length >= 8) {
      return true;
    } else {
      const passwordField = document.getElementById('password');
      passwordField.classList.add('error');
      passwordField.nextElementSibling.innerText = 'Password should be at least 8 characters.';
      return false;
    }
  }
  
  // Function to validate confirm password
  function validateConfirmPassword(password, cpassword) {
    if (password === cpassword) {
      return true;
    } else {
      const cpasswordField = document.getElementById('cpassword');
      cpasswordField.classList.add('error');
      cpasswordField.nextElementSibling.innerText = 'Passwords do not match.';
      return false;
    }
  }
  
  // Function to validate gender selection
  function validateGender() {
    const genderFields = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genderFields.length; i++) {
      if (genderFields[i].checked) {
        return true;
      }
    }
    const genderSection = document.querySelector('.input-radio');
    genderSection.classList.add('error');
    genderSection.nextElementSibling.innerText = 'Please select a gender.';
    return false;
  }

  
  // Function to get the selected gender
  function getSelectedGender() {
    const genderFields = document.querySelectorAll('input[name="gender"]');
    for (let i = 0; i < genderFields.length; i++) {
      if (genderFields[i].checked) {
        return genderFields[i].id;
      }
    }
  }
  
  // Add event listeners to clear validation errors on input change
  const formFields = document.querySelectorAll('#signypForm input');
  formFields.forEach(function(field) {
    field.addEventListener('input', function() {
      field.classList.remove('error');
      field.nextElementSibling.innerText = '';
    });

});
  
  



