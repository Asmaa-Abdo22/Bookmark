// &-------------- HTML ELEMENTS ---------------
var inputName = document.getElementById("name");
var inputUrl = document.getElementById("url");
var submitButton = document.getElementById("submitBtn");
var tableBody = document.getElementById("tbody");
var deleteBtn = document.getElementById("deleteBtn");
var emptyForm = document.getElementById("emptyForm");
// &-------------- GLOBAL VARIABLES -----------

if (localStorage.getItem("itemlist") !== null) {
  var itemList = JSON.parse(localStorage.getItem("itemlist"));
  displayItem();
} else {
  var itemList = [];
}

// &-------------- FUNCTIONS ------------------
function create() {
  if (inputName.value && inputUrl.value != "") {
    var item = {
      siteName: inputName.value,
      siteurl: inputUrl.value,
    };
    itemList.push(item);
    localStorage.setItem("itemlist", JSON.stringify(itemList));
    displayItem();
    clearForm();
  } else {
    alert("please enter information");
  }
}
function displayItem() {
  var trs = "";
  for (var i = 1; i < itemList.length; i++) {
    trs += `<tr>
    <td>${i}</td>
    <td>${itemList[i].siteName}</td>
    <td>
    <a class="btn visitbtn" href="${itemList[i].siteurl}" target="_blank">
    <i class="fa-solid fa-eye"></i>
    Visit
     </a>
     </td>
    <td>
     <button class="btn deletebtn" id="deleteBtn" onclick="deleteItem(${i})">
    <i class="fa-solid fa-trash"></i>
      Delete
     </button>
    </td>

    </tr>`;
  }
  tableBody.innerHTML = trs;
}
function clearForm() {
  inputName.value = "";
  inputUrl.value = "";
}
function deleteItem(index) {
  itemList.splice(index, 1);
  displayItem();
  localStorage.setItem("itemlist", JSON.stringify(itemList));
}
// &-------------- EVENTS ---------------------
submitButton.onclick = create;
