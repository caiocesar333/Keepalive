const container = document.querySelector("#container");
const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");



inputUsername.addEventListener("click", ()=>{
    // console.log("alow")
    icon1.classList.add("icon-animation1")
    icon2.classList.add("icon-animation2")
})
