"use strict"

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
// function validateTextInput(input) {
//   var textValue = input.value;
//   var errorText = document.getElementById('errorText');

//   var regex = /[0-9]/;

//   if (regex.test(textValue)) {
//     errorText.textContent = "Text cannot contain numbers.";
//     input.classList.add('error');
//   } else {
//     errorText.textContent = "";
//     input.classList.remove('error');
//   }
// }
function validateTextInput(input){
  var textValue = input.value.trim();
  var regex = /^[a-zA-Z]+$/;
  if (textValue === '' || !regex.test(textValue)){
    document.getElementByClass('labelAlert').style.display = 'block';
  } else {
    document.getElementByClass('labelAlert').style.display = 'none';
  }
}

document.getElementById('updatebtn').style.display ='none';

//form data submit function 
document.querySelector('#profileForm').addEventListener('submit', function(event) {
  event.preventDefault(); 


document.getElementById('img').addEventListener('change', handleImageUpload);

  function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
      const imageData = reader.result;
      localStorage.setItem('imageData', imageData);
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
      //img: img,
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



