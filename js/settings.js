"use strict"
//hide update btn 
document.getElementById('updatebtn').style.display ='none';

//function to toggle hamburger icon and make responsive
document.getElementById('closeIcon').style.visibility = 'hidden';
                
document.getElementById('hamburgerIcon').addEventListener('click', function() {
    var sidebarNav = document.getElementById('toggleSidebar');
    document.getElementById('hamburgerIcon').style.visibility = 'collapse';
    document.getElementById('closeIcon').style.visibility = 'visible';
    sidebarNav.classList.toggle('active');
});
document.getElementById('closeIcon').addEventListener('click', function() {
    var sidebarNav = document.getElementById('toggleSidebar');
    document.getElementById('hamburgerIcon').style.visibility = 'visible';
    document.getElementById('closeIcon').style.visibility = 'collapse';
    sidebarNav.classList.remove('active');
});

//mobile screeen change innercontent
if(window.innerWidth <= 480){
  document.getElementById('firstName').innerHTML = "First Name";
  document.getElementById('lastName').style.display = 'block';
}

//upload image file function
document.getElementById('img').addEventListener('change', function(){
  if (this.files[0] ) {
    var picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    picture.addEventListener('load', function(event) {
      document.getElementById('uploadedImage').setAttribute('src', event.target.result);
      document.getElementById('uploadedImage').style.display = 'block';
    });
  }
});

// check number in text field function
// function validateTextInput(input){
//   var textValue = input.value.trim();
//   var regex = /^[a-zA-Z]+$/;
//   if (textValue === '' || !regex.test(textValue)){
//     document.getElementsByClassName('labelAlert').style.display = 'block';
//     document.getElementsByClassName('labelAlert').innerHTML = "Must enter text with maximum length 20" ;
//   } else {
//     document.getElementsByClassName('labelAlert').style.display = 'none';
//   }
// }

function validateTextInput(input) {
  var textValue = input.value.trim();
  var regex = /^[a-zA-Z]+$/;
  var labelAlerts = document.getElementsByClassName('labelAlert');

  if (textValue === '' || !regex.test(textValue)) {
    for (var i = 0; i < labelAlerts.length; i++) {
      labelAlerts[i].style.display = 'block';
      labelAlerts[i].innerHTML = "Must enter text with maximum length 20";
    }
  } else {
    for (var i = 0; i < labelAlerts.length; i++) {
      labelAlerts[i].style.display = 'none';
    }
  }
}



//form data submit function 
document.querySelector('#profileForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  
  document.getElementById('img').addEventListener('change', handleImageUpload);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const imageData = reader.result;
      localStorage.setItem('peopleList', imageData);
    }
    reader.readAsDataURL(file);
  }

  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var imgFile = document.getElementById('img').files[0];
  var role = document.getElementById('role').value;
  var country = document.getElementById('country').value;
  var time = document.getElementById('time').value;
  var bio = document.getElementById('bio').value;

  var reader = new FileReader();
  reader.onload = function() {
    var imgDataUrl = reader.result;

    let formData = {
      fname: fname,
      lname: lname,
      email: email,
      img: imgDataUrl,
      role: role,
      country: country,
      time: time,
      bio: bio
    };

    let data = localStorage.getItem("peopleList"); 
    let formDataArray;
    if (data) {
      formDataArray = JSON.parse(data);
    } else {
      formDataArray = [];
    }

    formDataArray.push(formData);
    console.log("data", formDataArray);

    var formDataJson = JSON.stringify(formDataArray);
    console.log(formDataJson);

    localStorage.setItem('peopleList', formDataJson);
    window.location.href = 'admin.html';

    form.reset();
  };

  reader.readAsDataURL(imgFile);

});



