// document.getElementById('img').addEventListener('change', function(){
//     if (this.files[0] ) {
//       var picture = new FileReader();
//       picture.readAsDataURL(this.files[0]);
//       picture.addEventListener('load', function(event) {
//         document.getElementById('uploadedImage').setAttribute('src', event.target.result);
//         document.getElementById('uploadedImage').style.display = 'block';
//       });
//     }
//   });


//edit function of form data

let urlParams = window.location.href;
let id = urlParams.split("?")[1];
//console.log(id);
let data = JSON.parse(localStorage.getItem('peopleList'));
let idData= data[id];
//console.log(idData);
let html= "";
let x= `
<section class="input-group">
    <label for="fname">Name</label>
    <label for="lname" style="display: none;"></label>
        <section class="input-row">
        <input class="input-field" type="text" placeholder="First name" id="fname" name="fname" value="${idData.fname}">
        <input class="input-field" type="text" placeholder="Last name" id="lname" name="lname" value="${idData.lname}">
    </section>
</section>

<section class="input-group">
    <label for="email">Email address</label>
    <input class="input-field" type="email" placeholder="abc@untitledui.com" id="email" name="email" autocomplete="on" value="${idData.email}">
</section>

<section class="input-group photo">
    <label for="img">Your photo<br><span class="label-next-line">This will be displayed on your profile</span></label>
    <section class="input-row">
        <figure><img src="" alt="profile"></figure>
        <section class="upload-container">
            <section class="upload-content">
                <label for="img">
                    <input type='file' id="img" style="visibility: collapse;">
                    <img id="uploadedImage" src="#" accept="image/png, image/jpeg" style="display:none;">
                    <section class="wrap">
                        <figure class="logo"><img src="./image/portcardlogo2.svg"></figure>
                        <h1><a>Click to upload</a> or drag and drop</h1>
                        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </section>
                </label>
            </section>
        </section>
    </section>
</section>

<section class="input-group">
    <label for="role">Role</label>
    <input class="input-field" type="text" placeholder="Product Designer" id="role" name="role" value="${idData.role}"}>
</section>

<section class="input-group">
    <label for="country">Country</label>
    <select name="country" id="country" class="input-field" autocomplete="on">
        <option value="United States" ${idData.country === 'United States' ? 'selected' : ''}>United States</option>
        <option value="Australia" ${idData.country === 'Australia' ? 'selected' : ''}>Australia</option>
        <option value="UK" ${idData.country === 'UK' ? 'selected' : ''}>UK</option>
        <option value="UAE" ${idData.country === 'UAE' ? 'selected' : ''}>UAE</option>
        <option value="Russia" ${idData.country === 'Russia' ? 'selected' : ''}>Russia</option>
        <option value="China" ${idData.country === 'China' ? 'selected' : ''}>China</option>
        <option value="Japan" ${idData.country === 'Japan' ? 'selected' : ''}>Japan</option>
        <option value="India" ${idData.country === 'India' ? 'selected' : ''}>India</option>
        <option value="Nepal" ${idData.country === 'Nepal' ? 'selected' : ''}>Nepal</option>
        <option value="Norway" ${idData.country === 'Norway' ? 'selected' : ''}>Norway</option>
    </select>
</section>

<section class="input-group">
    <label for="time">Timezone</label>
    <select name="time" id="time" class="input-field" value="${idData.time}">
        <option value="Pacific Standard Time UTC-08:00" selected>Pacific Standard Time UTC-08:00</option>
        <option value="Newfoundland Standard Time UTC-03:30">Newfoundland Standard Time UTC-03:30</option>
        <option value="Atlantic Standard Time UTC-04">Atlantic Standard Time UTC-04</option>
        <option value="Eastern Standard Time UTC-05">Eastern Standard Time UTC-05</option>
        <option value="Central Standard Time UTC-06">Central Standard Time UTC-06</option>
        <option value="Mountain Standard Time UTC-07">Mountain Standard Time UTC-07</option>
        <option value="Gulf Standard Time UTC+04">Gulf Standard Time UTC+04</option>
        <option value="Iran Standard Time UTC+03:30">Iran Standard Time UTC+03:30</option>
        <option value="Indian Standard Time UTC+05:30">Indian Standard Time UTC+05:30</option>
        <option value="Nepal Time UTC+05:45">Nepal Time UTC+05:45</option>
    </select>
</section>

<section class="input-group big-input">
    <label for="bio">Bio<br><span class="label-next-line">Write a short introduction</span></label>
    <section class="input-column text">
        <span class="inline-element">
            <select name="style" id="style" class="input-field">
                <option value="Times New roman">Times New roman</option>
                <option value="Sans seriff" selected>Sans seriff</option>
                <option value="Italic text">Italic text</option>
                <option value="Underline text">Underline text</option>
            </select>
            <section class="side-list">
                <button type="button" class="btn-icon"><i class="fa-solid fa-bold"></i></button>
                <button type="button" class="btn-icon"><i class="fa-solid fa-italic"></i></button>
                <button type="button" class="btn-icon"><i class="fa-solid fa-link"></i></button>
                <button type="button" class="btn-icon"><i class="fa-solid fa-list"></i></button>
                <button type="button" class="btn-icon"><i class="fa-solid fa-list-ol"></i></button>
            </section>
        </span>
        <br>
        <textarea name="bio" id="bio" cols="30" rows="10" placeholder="Enter your text here....">${idData.bio}</textarea>
        <span class="label-next-line" style="padding-top: 10px;"> 300 characters left</span>
    </section>
</section>

<section class="input-group big-input">
    <label for="fileUrl">Portfolio projects<br><span class="label-next-line">Share a Few snippets of your work<span></label>
    <section class="input-column">

        <section class="upload-container">
            <section class="upload-content">
                <label for="fileUrl">
                    <input type='file' id="fileUrl" style="visibility: collapse;">
                    <img id="uploadedImage" src="#" alt="Uploaded Image" accept="image/png, image/jpeg" style="display:none;">
                    <section class="wrap">
                        <figure class="logo"><img src="./image/portcardlogo2.svg"></figure>
                        <h1><a>Click to upload</a> or drag and drop</h1>
                        <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                    </section>
                </label>
            </section>
        </section>

    </section>
</section>

<section class="page-header form-footer-header">
    <section class="header-content form-footer-content">
        <section class="header-action">
            <button type="reset" class="nav-side-btn btn">Reset</button>
            <button type="button" class="nav-side-btn btn" id="updatebtn" onclick="updateData()">Update</button>
        </section>
    </section>
</section>
    `
html += x;
document.querySelector("#profileForm").innerHTML = html;

document.getElementById('updatebtn').addEventListener('click', updateData);


//update function after edit button clicked
function updateData()
{
    if (confirm("Are you sure you want to edit?\nPress OK button to edit.") == true) {
    let newData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        img: document.getElementById('img').files[0],
        role: document.getElementById('role').value,
        country: document.getElementById('country').value,
        time: document.getElementById('time').value,
        bio: document.getElementById('bio').value
    };

    let formDataArray = JSON.parse(localStorage.getItem('peopleList')) || [];
    formDataArray[id] = newData;

    localStorage.setItem('peopleList', JSON.stringify(formDataArray));  
    localStorage.removeItem('editData');

    window.location.href = 'admin.html';
    }
    else {
        window.location.href = 'admin.html';
    }
}







  
// 

// let editData = JSON.parse(localStorage.getItem('editData'));

//   if (editData && editData.length > 0) {
//     console.log(editData[0]);
//     document.getElementById('fname').value = editData[0].fname;
//     document.getElementById('lname').value = editData[0].lname;
//     document.getElementById('email').value = editData[0].email;
//     document.getElementById('role').value = editData[0].role;
//     document.getElementById('img').value = editData[0].img;
//     document.getElementById('bio').value = editData[0].bio;
//   }
//     let editIndex = editData[0];
//     console.log(editIndex);


// document.querySelector('#profileForm').addEventListener('click', function(event) {
//   event.preventDefault(); 


//   let newData = {
//     fname: document.getElementById('fname').value,
//     lname: document.getElementById('lname').value,
//     email: document.getElementById('email').value,
//     role: document.getElementById('role').value,
//     img: document.getElementById('img').value,
//     bio: document.getElementById('bio').value
//   };

//   let formDataArray = JSON.parse(localStorage.getItem('peopleList')) || [];
//   formDataArray[editIndex] = newData;

//   localStorage.setItem('updatedData', JSON.stringify(formDataArray));  

//   localStorage.removeItem('editData');
//   //window.location.href = 'admin.html';
//   function updateData(){

//     console.log("Hello");
    
//     document.getElementById('fname').value = "";
//     document.getElementById('lname').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('role').value = "";
//     document.getElementById('img').value = "";
//     document.getElementById('bio').value = "";
//   }

// });


// 


