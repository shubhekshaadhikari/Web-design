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

//after login sucessful display profile in login account
let datas = localStorage.getItem("loginData"); 
let dataArray;
if(datas){
      dataArray= JSON.parse(datas);
}else{
  dataArray=[];
}
document.getElementById('profileName').innerHTML = dataArray.fname + dataArray.lname;
document.getElementById('profileEmail').innerHTML = dataArray.email;

//keep value of key in object and convert into array
let data = localStorage.getItem("peopleList"); 
let formDataArray;
if(data){
      formDataArray= JSON.parse(data);
}else{
  formDataArray=[];
}

//display form data in table
function showData(){
  var peopleList=formDataArray/*.slice(0,5)*/;
  var html = "";
  peopleList.forEach(function (element, index) {
   let x= `
  <tr>
  <td>
    <section class="col1">
      <figure>
       <img src="${ element.img }" alt="profile">
      </figure>
      <section>
            <h1>${ element.fname + " " + element.lname } </h1>
            <p>${ element.email }</p>
      </section>
    </section>
  </td>
  <td class="col2">
    ${ element.country }
  </td>
  <td class="col3">
    <section class="badge">${ element.role }</section>
  </td>
  <td class="col4">
    <section class="avatars">
        <a href="#" class="avatars__item"><img src="./image/Avatar1.svg"></a>
        <a href="#" class="avatars__item"><img src="./image/Avatar2.svg"></a>
        <a href="#" class="avatars__item"><img src="./image/Avatar3.svg"></a>
        <a href="#" class="avatars__item"><img src="./image/Avatar4.svg"></a>
        <a href="#" class="avatars__item"><img src="./image/Avatar+2.svg"></a>
    </section>
  </td>
  <td class="col5">
    <section>
      <h1>${ element.bio }</h1>
    </section>
  </td>
  <td>
    <section class="col6">
      <button onclick="deleteData(${ index })" type="button" class="btn-icon table-btn">
        <img src="./image/delete.svg">
      </button>
      <a href="./edit.html?${ id=index }" type="button" class="btn-icon table-btn">
        <img src="./image/edit.svg">
      </a>
    </section>
  </td>
  </tr>
   `
    html += x;
  });
  document.querySelector("#tableBody").innerHTML = html;

  //display total no of customers present in table list 
  document.querySelector("#tableItemNo").innerHTML = formDataArray.length;
}

document.onload = showData();

// retrieve new form data and add in table 
function addData(){

  window.addEventListener('DOMContentLoaded', function() {
    const imageData = localStorage.getItem('peopleList');
    if (imageData) {
      const imageElement = document.createElement('img');
      imageElement.src = imageData;
      document.getElementById('img').appendChild(imageElement);
    }
  });

  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var img = document.getElementById('img').files[0];
  var role = document.getElementById('role').value;
  var country = document.getElementById('country').value;
  var time = document.getElementById('time').value;
  var bio = document.getElementById('bio').value;
  var peopleList;
  peopleList.push({
    fname: fname,
    lname: lname,
    email: email,
    img: img,
    role: role,
    country: country,
    time: time,
    bio: bio
  });
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
  document.getElementById('fname').value = "";
  document.getElementById('lname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('img').value = "";
  document.getElementById('role').value = "";
  document.getElementById('country').value = "";
  document.getElementById('time').value = "";
  document.getElementById('bio').value = "";
}

//delete btn function in table 
function deleteData(index){
  if (confirm("Are you sure you want to delete?") == true) {
  let peopleList=formDataArray;
  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
  }
}

//edit btn function in table 
// function editedData(index){
//   let peopleList=formDataArray;

//   let selectedRow= peopleList[index];
//   let dataRow = [];


//   dataRow.push(selectedRow);
//   console.log(dataRow);

//   localStorage.setItem('editData', JSON.stringify(dataRow));

//   //window.location.href = 'edit.html';
// }

//search operation done on table data and show matching data only
function performSearch() {
  const input = document.getElementById('searchbar').value.toLowerCase();
  const table = document.getElementById('tableBody');
  const rows = table.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName('td');
    let matchFound = false;

    for (let j = 0; j < cells.length; j++) {
      const cellValue = cells[j].textContent.toLowerCase();
      if (cellValue.includes(input)) {
        matchFound = true;
        break;
      }
    }

    if (matchFound) {
      rows[i].style.display = 'table-row';
    } else {
      rows[i].style.display = 'none';
    }

  }
}
