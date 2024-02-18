const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");

function handlePasswordChange() {
  if (
    confirmPasswordInput.value &&
    passwordInput.value !== confirmPasswordInput.value
  ) {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "";
  } else {
    confirmPasswordError.textContent = "";
    passwordError.textContent = "";
  }
}

function handleConfirmPasswordChange() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "";
  } else {
    confirmPasswordError.textContent = "";
    passwordError.textContent = "";
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (
    !passwordInput.value ||
    !confirmPasswordInput.value ||
    passwordInput.value !== confirmPasswordInput.value
  ) {
    confirmPasswordError.textContent = "Passwords do not match";
    passwordError.textContent = "Passwords do not match";
  } else {
    console.log("Form submitted successfully");
  }
}

passwordInput.addEventListener("input", handlePasswordChange);
confirmPasswordInput.addEventListener("input", handleConfirmPasswordChange);
document
  .getElementById("password-form")
  .addEventListener("submit", handleSubmit);


  function showDropDownMenu_form_layout_wizard3(el) {
    el.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext_form_layout_wizard3(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter_form_layout_wizard3"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div_form_layout_wizard3")
      .classList.toggle("hidden");
  }
  function showDropDownMenuOne_form_layout_wizard3(el) {
    el.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptextone_form_layout_wizard3(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter-one_form_layout_wizard3"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div-one_form_layout_wizard3")
      .classList.toggle("hidden");
  }
  function showDropDownMenutwo_form_layout_wizard3(el) {
    el.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptexttwo_form_layout_wizard3(el) {
    const targetText = el.innerHTML;
    document.getElementById(
      "drop-down-content-setter-two_form_layout_wizard3"
    ).innerHTML = targetText;
    document
      .getElementById("drop-down-div-two_form_layout_wizard3")
      .classList.toggle("hidden");
  }



  function dropdownHandler(element) {
    let single = element.getElementsByTagName("ul")[0];
    single.classList.toggle("hidden");
}
function MenuHandler(el, val) {
    let MainList = el.parentElement.getElementsByTagName("ul")[0];
    let closeIcon = el.parentElement.getElementsByClassName("close-m-menu")[0];
    let showIcon = el.parentElement.getElementsByClassName("show-m-menu")[0];
    if (val) {
        MainList.classList.remove("hidden");
        el.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.classList.add("hidden");
    }
}
let sideBar = document.getElementById("mobile-nav");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
sideBar.style.transform = "translateX(-100%)";
const sidebarHandler = (check) => {
    if (check) {
        sideBar.style.transform = "translateX(0px)";
        menu.classList.add("hidden");
        cross.classList.remove("hidden");
    } else {
        sideBar.style.transform = "translateX(-100%)";
        menu.classList.remove("hidden");
        cross.classList.add("hidden");
    }
};
let list = document.getElementById("list");
let chevrondown = document.getElementById("chevrondown");
let chevronup = document.getElementById("chevronup");
const listHandler = (check) => {
    if (check) {
        list.classList.remove("hidden");
        chevrondown.classList.remove("hidden");
        chevronup.classList.add("hidden");
    } else {
        list.classList.add("hidden");
        chevrondown.classList.add("hidden");
        chevronup.classList.remove("hidden");
    }
};
let list2 = document.getElementById("list2");
let chevrondown2 = document.getElementById("chevrondown2");
let chevronup2 = document.getElementById("chevronup2");
const listHandler2 = (check) => {
    if (check) {
        list2.classList.remove("hidden");
        chevrondown2.classList.remove("hidden");
        chevronup2.classList.add("hidden");
    } else {
        list2.classList.add("hidden");
        chevrondown2.classList.add("hidden");
        chevronup2.classList.remove("hidden");
    }
};