function addWEBox() {
  // Create new work experience text box
  let newWorkObj = document.createElement("textarea");
  newWorkObj.classList.add("form-control");
  newWorkObj.classList.add("mb-3");
  newWorkObj.setAttribute("rows", 3);
  newWorkObj.setAttribute("placeholder", "Enter your work experience");

  // Get element to add it before
  let weBtnCntObj = document.getElementById("weBtnContainer");
  let weDivObj = document.getElementById("weDiv");
  weDivObj.insertBefore(newWorkObj, weBtnCntObj);
}

function addEduBox() {
  // Create new education text box
  let newEduBoxObj = document.createElement("textarea");
  newEduBoxObj.classList.add("mb-3");
  newEduBoxObj.classList.add("form-control");
  newEduBoxObj.setAttribute("rows", 3);
  newEduBoxObj.setAttribute("placeholder", "Enter your education");

  // Get element to add it before
  let eduDivObj = document.getElementById("educationDiv");
  let eduBtnCntObj = document.getElementById("eduBtnContainer");
  eduDivObj.insertBefore(newEduBoxObj, eduBtnCntObj);
}
