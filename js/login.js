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

//event for submitting form data in local storage and create account
document.querySelector('#loginbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;

    let datas = localStorage.getItem("loginData"); 
    let dataArray;
    if(datas){
          dataArray= JSON.parse(datas);
    }else{
      dataArray=[];
    }

    if(email == dataArray.email && password == dataArray.password){
        window.location.href = 'admin.html';
    }
    else{
        alert("Login Unsucessfull!!!\n Please try again");
    }
  });